import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class DireitoAgilCkEditor extends ClassicEditorBase {
  builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Heading,
    Link,
    Alignment,
    Font
  ];

  defaultConfig = {
    language: 'pt-br',
    toolbar: {
      items: [
        'fontfamily', 'fontsize', '|',
        'bold', 'italic', '|',
        'link', '|',
        'outdent', 'indent', 'alignment', '|',
        'bulletedList', 'numberedList', '|',
        'undo', 'redo'
      ]
    }
  };
}
