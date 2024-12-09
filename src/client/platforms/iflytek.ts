import { EventSourceMessage, EventStreamContentType, fetchEventSource } from "@fortaine/fetch-event-source";
import { useChatStore } from "../../../store";

class RetriableError extends Error {}
class FatalError extends Error {}

export function iflytek(content: string) {
  const controller = new AbortController();

  const handleOpen = async (response: Response) => {
    if (response.ok && response.headers.get('content-type') === EventStreamContentType) {
      useChatStore.getState().add({
        context: "",
        sender: "assistent",
        status: "loading",
      });
      return; // everything's good
    } else if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      // client-side errors are usually non-retriable:
      throw new FatalError();
    } else {
      throw new RetriableError();
    }
  };

  const handleMessage = (msg: EventSourceMessage) => {
    if (msg.data === "[DONE]") {
      controller.abort();
    }
    const text = msg.data;
    const json = JSON.parse(text);
    const choices = json.choices as Array<{ delta: { content: string } }>;
    const delta = choices[0]?.delta?.content;
    useChatStore.getState().concatLastMessage(delta);
  };

  const handleClose = () => {
    controller.abort();
    // if the server closes the connection unexpectedly, retry:
    throw new RetriableError();
  };

  const handleError = (err: Error) => {
    throw err;
    // if (err instanceof FatalError) {
    //   throw err; // rethrow to stop the operation
    // } else {
    //   // do nothing to automatically retry. You can also
    //   // return a specific retry interval here.
    // }
  };

  const buildRequestBody = (content: string) => ({
    model: "4.0Ultra",
    messages: [
        {
            role: "user",
            content: content
        }
    ],
    stream: true
});

const getHeaders = (token: string | undefined) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
})
  fetchEventSource("/api/v1/chat/completions", {
    method: "POST",
    headers: getHeaders(process.env.IFLYTEC_TOKEN),
    body: JSON.stringify(buildRequestBody(content)),
    signal: controller.signal,
    onopen: handleOpen,
    onmessage: handleMessage,
    onclose: handleClose,
    onerror: handleError,
  });
}
