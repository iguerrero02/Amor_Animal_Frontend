import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/shared/data/widgets/widgets'
import {
  ButtonsConfig, ButtonsStrategy, AdvancedLayout, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE,
   KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonEvent,  ButtonType, PlainGalleryConfig,
   PlainGalleryStrategy,} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/images/media/1.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: '../../assets/images/media/2.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: '../../assets/images/media/3.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: '../../assets/images/media/4.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: '../../assets/images/media/5.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: '../../assets/images/media/6.jpg',
        title: '',
      }
    ) 
  ]

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }
  
  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  }

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.GalleryImage = [...this.GalleryImage, newImage];
  }


  public AreaChartOptions = data.AreaChartOptions
  public AreaChartLabels = data.AreaChartLabels
  public AreaChartData = data.AreaChartData
  public AreaChartColors = data.AreaChartColors
  public AreaChartType = data.AreaChartType
  public AreaChartData1 = data.AreaChartData1
  public AreaChartColors1 = data.AreaChartColors1
  public AreaChartData2 = data.AreaChartData2
  public AreaChartColors2 = data.AreaChartColors2
  public AreaChartData3 = data.AreaChartData3
  public AreaChartColors3 = data.AreaChartColors3
}
