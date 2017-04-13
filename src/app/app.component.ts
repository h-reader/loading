import { Component } from '@angular/core';
import { LoadingService } from './loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private loadingService: LoadingService) { }

  public testAsnc() {
    // 非同期処理開始
    this.execAsync(this.asyncProc);

    console.log('procEnd!');
  }

  private execAsync(func: Function) {
    // ローディング画像表示
    this.loadingService.startLoading();

    const promise = new Promise((resolve) => {

      setTimeout(() => {
        // 内部処理実行
        func();
        // 正常終了後の処理
        resolve();
      }, 1000);

    }).then(() => {
     // ローディング画像非表示
     this.loadingService.endLoading();
    });

  }

  private asyncProc() {
      console.log('asyncEnd!');
  }
}
