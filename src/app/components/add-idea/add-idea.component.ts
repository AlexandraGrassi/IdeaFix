import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  constructor() { }

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
}
