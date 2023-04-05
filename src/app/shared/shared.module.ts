import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoComponent, ModalComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LogoComponent, ModalComponent],
})
export class SharedModule {}
