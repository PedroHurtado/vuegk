export class PubSub<T> {
    private suscriptors = new Map<string, Array<(data: T) => void>>();

    emit(channel: string, data: T) {
        const channelSuscriptors = this.suscriptors.get(channel);
        if (channelSuscriptors) {
            channelSuscriptors.forEach(f => f(structuredClone(data)));
        }
    }

    on(channel: string, handler: (data: T) => void): () => void {
        let channelSuscriptors = this.suscriptors.get(channel);
        
        if (!channelSuscriptors) {
            channelSuscriptors = [];
            this.suscriptors.set(channel, channelSuscriptors);
        }
        
        channelSuscriptors.push(handler);

        return () => {
            const index = channelSuscriptors!.indexOf(handler);
            if (index > -1) {
                channelSuscriptors!.splice(index, 1);
                if (channelSuscriptors!.length === 0) {
                    this.suscriptors.delete(channel);
                }
            }
        };
    }
}
