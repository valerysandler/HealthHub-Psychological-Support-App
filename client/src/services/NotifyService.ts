import { Notyf } from "notyf";
import 'notyf/notyf.min.css'; // for React, Vue and Svelte


class NotifyService {

    private notification = new Notyf({ duration: 3000, dismissible: true, position: { x: "right", y: "bottom" } });

    public success(message: string) {
        this.notification.success(message);
    }

    public error(message: string) {
        this.notification.error(message);
    }

    public info(message: string) {
        this.notification.open({ type: "info", message });
    }

    public warn(message: string) {
        this.notification.open({ type: "warning", message });
    }

    public notify(message: string) {
        this.notification.open({ type: "info", message });
    }

    public alert(message: string) {
        this.notification.open({ type: "warning", message });
    }
       
}

const notifyService = new NotifyService();

export default notifyService;