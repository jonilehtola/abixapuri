CKEDITOR.plugins.add( 'abittiimage', {
    icons: 'abittiimg',
    init: function( editor ) {
        //Plugin logic goes here.
		editor.addCommand('abittiimg', new CKEDITOR.dialogCommand('abittiimgDialog'));
		editor.ui.addButton('abittiimg', {
			label: 'Lisää kuva, video tai ääni Abitti-kokeen liitetiedostoista',
			command: 'abittiimg',
			toolbar: 'insert'
		});
		CKEDITOR.dialog.add('abittiimgDialog', this.path + 'dialogs/abittiimg.js');
    }
});