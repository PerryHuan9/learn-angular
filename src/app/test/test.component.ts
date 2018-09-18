import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    value: string;
    imgUrl = '../../assets/img/air-use-1.jpg';

    constructor() {
        this.value = '双大括号绑定';
    }
    // expression

    ngOnInit() {
    }

}
