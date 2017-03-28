
class AppComponent {
    counter: number;

    constructor() {
        this.counter = 0;
    }

    inc() {
        this.counter++;
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});
