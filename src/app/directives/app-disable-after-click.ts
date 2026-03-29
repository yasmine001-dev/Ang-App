import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true,
})
export class AppDisableAfterClick {
  @Input() disableWhen = false;

  private originalText: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    if (this.disableWhen) return;
    const button = this.el.nativeElement;

    this.originalText = button.innerText;

    this.renderer.setProperty(button, 'disabled', true);

    this.renderer.setProperty(button, 'innerText', 'Processing...');

    setTimeout(() => {
      if (!this.disableWhen) {
        this.renderer.setProperty(button, 'disabled', false);
      }
      this.renderer.setProperty(button, 'innerText', this.originalText);
    }, 1000);
  }
}
