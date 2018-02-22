import { Component, OnInit } from '@angular/core';
//import {Cloudinary} from "@cloudinary/angular";
import {Idea} from "../../models/idea.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {IdeaService} from "../../services/idea.service";
import {PostIdea} from "../../models/postIdea.model";
import {Tag} from "../../models/tag.model";

declare var $: any;

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  private idea: PostIdea;
  public rForm: FormGroup;
  private create: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private ideaService: IdeaService) {
    this.rForm = fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(30)])],
      'bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      'tags': [null]
    });
  }

  ngOnInit() {
    $('.field.remote .ui.dropdown')
      .dropdown({
        direction: 'downward',
        allowAdditions: true,
        /*apiSettings: {
          url: '//api.semantic-ui.com/tags/{query}',
          cache: false
        }*/
      });

    $('#upload').on('change', function () {
      const item = $(this)[0].files;
      const itemCount = $(this)[0].files.length;
      const itemPath = $(this)[0].value;
      const itemExt = itemPath.substring(itemPath.lastIndexOf('.') + 1).toLowerCase();
      const itemPreview = $('#preview');
      itemPreview.empty();
      console.log(itemExt);

      if (itemExt === 'gif' || itemExt === 'jpg' || itemExt === 'jpeg' || itemExt === 'png' || itemExt === 'bmp') {
        if (typeof(FileReader) !== 'undefined') {
          for (let i = 0; i < itemCount; i++) {
            const reader = new FileReader();
            const fn = item[i].name;
            const fs = item[i].size;
            const ft = item[i].type;
            reader.onload = function (e: any) {
              $('<img />', {
                'src': e.target.result,
                'height': '100',
                'class': 'item-upload',
                'title': fn + ' and size' + fs + ' bytes and type ' + ft,
                'alt': fn + 'and size' + fs + ' bytes and type' + ft
              }).appendTo(itemPreview);
            };

            itemPreview.show();
            reader.readAsDataURL($(this)[0].files[i]);
          }
        } else {
          itemPreview.html('Some error');
        }
      } else {
        itemPreview.html('Wrong file format');
      }
    });
  }

  postIdea(create) {
    let arrTags = create.tags.split(' ');
    // console.log(arrTags);
    let transfer = [];
    for (let i = 0; i < arrTags.length; i++) {
      transfer[i] = {"name": arrTags[i]};
    }
    // console.log(transfer);
    this.idea = new PostIdea(0, create.title, create.bigDescription, null, transfer, []);
    this.ideaService.createIdea(this.idea).subscribe(result => {
      console.log('IDEA CREATE SUCCESS');
    }, error => {
      console.log('IDEA CREATE ERROR');
    });
  }
}
