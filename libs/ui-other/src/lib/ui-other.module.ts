import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestOtherComponent } from './test-other/test-other.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestOtherComponent],
  exports: [TestOtherComponent],
})
export class UiOtherModule {}
