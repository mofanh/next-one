import { fetchEventSource } from "@fortaine/fetch-event-source";

// class RetriableError extends Error { }
// class FatalError extends Error { }

export function iflytek(content: string) {
  const controller = new AbortController();
  let index = 0;
  fetchEventSource("/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer nPLgqzEHEtEjZcnsDKdS:mZIvrDDeVfZRpYejdKau",
    },
    body: JSON.stringify({
      model: "4.0Ultra",
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      stream: true,
    }),
    signal: controller.signal,
    // async onopen(response) {
    //     if (response.ok && response.headers.get('content-type') === EventStreamContentType) {
    //         return; // everything's good
    //     } else if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    //         // client-side errors are usually non-retriable:
    //         throw new FatalError();
    //     } else {
    //         throw new RetriableError();
    //     }
    // },
    onmessage(ev) {
        console.log('index--', ++index)
      console.log("ev.data--", ev.data);
    },
    // onclose() {
    //     controller.signal.onabort
    //     // if the server closes the connection unexpectedly, retry:
    //     throw new RetriableError();
    // },
    // onerror(err) {
    //     if (err instanceof FatalError) {
    //         throw err; // rethrow to stop the operation
    //     } else {
    //         // do nothing to automatically retry. You can also
    //         // return a specific retry interval here.
    //     }
    // }
  });
}