import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  Input,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status',
  },
})
export class ServerStatusComponent implements OnInit ,AfterViewInit  {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef); //ngDestory alternative

  constructor() {
    effect(()=>{
      console.log( "the status is : "  + this.currentStatus());
      
    })
    // console.log('con');

  }

  @Input() status!: number;

  ngOnInit(): void {
    console.log('ngOnInit');
    const interval = setInterval(() => {
      const val = Math.random(); // 0 - 0.999
      if (val < 0.5) {
        this.currentStatus.set('online');
      } else if (val < 0.85) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    console.log(this.currentStatus());
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // clearInterval(this.interval);
  }
}
