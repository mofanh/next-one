import { fetchXfSpark } from '@/client/platforms/XfSpark';
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
}

export const useChatStore = create<MessageStore>((set) => ({
    // 初始消息状态设置为空数组
    messages: [],
    add: (newMessage) => set((state) => ({
        messages: [...state.messages, newMessage]
    })),
    onUserInput: () => {
        fetchXfSpark('来一个只有程序员能听懂的笑话')
    }
}));