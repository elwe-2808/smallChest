import type {Ref} from 'vue'
import {ref} from 'vue'
import type {NotificationData, Severity, UiBannerProps} from '@/services/notification/notification'


export class NotificationService {
    private static _subjectQueue: Ref<NotificationData[]> = ref([]);

    private static severities: {[key in Severity]: UiBannerProps} = {
        'success': {
            severity: 'success',
            iconClass: '',
            bgClass: 'bg-emerald-700',
        },
        'warning': {
            severity: 'warning',
            iconClass: '',
            bgClass:'bg-orange-600'
        },
        'error': {
            severity: 'error',
            iconClass: '',
            bgClass:'bg-red-800'
        },
        'info': {
            severity: 'info',
            iconClass: '',
            bgClass:'bg-sky-700'
        },
    }

    error(message: string = ""){
        this.add('error', message)
    }

    warning(message: string = ""){
        this.add('warning', message)
    }

    info(message: string = ""){
        this.add('info', message)
    }

    success(message: string = ""){
        this.add('success', message)
    }

    add(severity: Severity, message: string) {
        const notif: NotificationData = {
            message,
            liveTime: 2000,
            uiBannerProps: this.getSeverityColor(severity),
            id: this.getId(),
            close: () => {}
        }
        notif.close = () => {
            this.close(notif)
        }
        NotificationService._subjectQueue.value.push(notif)
    }

    private getId(): string{
        return new Date().toISOString() + Math.random()
    }

    private getSeverityColor(severity: Severity): UiBannerProps {
        return NotificationService.severities[severity]
    }

    private close(notification: NotificationData){
        const index = this.notifications.value.findIndex(val => val.id === notification.id)
        this.notifications.value.splice(index, 1)
    }

    get notifications(): Ref<any[]>{
        return NotificationService._subjectQueue
    }

}


export function useNotification(){
    return new NotificationService()
}
