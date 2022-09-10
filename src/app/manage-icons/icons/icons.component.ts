import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
  public IconForm: FormGroup;
  public selectedIcon = null;
  public imageSrc: any = null;
  public imageSrcSvg: any = null;
  public selectedIconSvg = null;

  constructor(private iconService: IconService, private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.IconForm = this.fb.group({
      bundleName: [''],
      iconName: [''],
      iconType: [''],
      tag: [''],
    });
  }

  public onSelectIcon(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.selectedIcon = event.target.files[0];
      reader.readAsDataURL(this.selectedIcon as any);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    } else {
      this.selectedIcon = null;
    }
  }

  public onSubmit() {
    const formData = new FormData();
    const value = this.IconForm.value;
    formData.append('iconPng', this.selectedIcon || '');
    formData.append('iconSvg', this.selectedIconSvg || '');
    formData.append('bundleName', value.bundleName || '');
    formData.append('iconName', value.iconName || '');
    formData.append('tags', value.tag || '');
    formData.append('iconType', value.iconType[0] || '');
    this.iconService.addIcon(formData).subscribe({
      next: (event) => {},
      error: (err) => {
        console.error(err);
      },
    });
  }

  selectedImageChanged(event: any) {
    this.selectedIconSvg = event.target.files[0];
    if (this.selectedIconSvg) {
      const fileReader = new FileReader();
      fileReader.onload = async e => {
        const value = this.sanitizer.bypassSecurityTrustUrl(fileReader.result as string);
        this.imageSrcSvg = value;
      }
      fileReader.readAsDataURL(this.selectedIconSvg);
    }
  }
}
