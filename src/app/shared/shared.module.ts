import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CubeComponent } from './components/cube/cube.component';

@NgModule({
  declarations: [LogoComponent, ModalComponent, ServiceCardComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LogoComponent, ModalComponent, ServiceCardComponent],
  
})
export class SharedModule {}
