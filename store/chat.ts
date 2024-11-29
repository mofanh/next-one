import { create } from 'zustand';

// 定义消息状态的接口
interface MessageStore {
    messages: {
        context: string;
        sender: 'system' | 'assistent' | 'user';
        status: 'pass' | 'loading' | 'error' | string;
    }[]; // 注意这里改成数组类型，以便存储多条消息
    add: (newMessage: {
        context: string;
        sender: 'system' | 'assistent' | 'user';
        status: 'pass' | 'loading' | 'error' | string;
    }) => void;
    concatLastMessage: (context: string) => void;
}

export const useChatStore = create<MessageStore>((set) => ({
    // 初始消息状态设置为空数组
    messages: [],
    add: (newMessage) => set((state) => ({
        messages: [...state.messages, newMessage]
    })),
    updateLastMessage: (newMessage) =>{
        set((state) => ({
            messages: [...state.messages.slice(0, -1), newMessage]
        }))
    },
    concatLastMessage: (context: string) => {
        set((state) => {
            const lastMessage = state.messages[state.messages.length - 1];
            const concatenatedMessage = {
                ...lastMessage,
                status: 'pass',
                context: lastMessage?.context || '' + context
            };
            return {
                messages: [...state.messages.slice(0, -1), concatenatedMessage]
            };
        });
    }
}));