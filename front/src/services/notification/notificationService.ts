import {Observable, Subject} from 'rxjs'
import type {Ref} from 'vue'
import {ref} from 'vue'
import type {NotificationData, Severity} from '@/services/notification/notification'


export class NotificationService {
    private static _subjectQueue: Ref<NotificationData[]> = ref([]);

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
        NotificationService._subjectQueue.value.push({
            message,
            severity: severity,
            id: this.getId()
        })
    }

    private getId(): string{
        return new Date().toISOString() + Math.random()
    }

    get notifications(): Ref<any[]>{
        return NotificationService._subjectQueue
    }

}


export function useNotification(){
    return new NotificationService()
}
