/*
  File Block
*/


SirTrevor.Blocks.File = SirTrevor.Blocks.Image.extend({
  type: "file",
  title: "File",

  loadData: function(data){
    var pathParts = data.file.path.split('/'),
        $output = $('<div>');
    $output.append($('<a>', { href: data.file.url, download: data.file.name }).text(data.file.name));
    $output.append($('<div>').addClass('type').text(data.file.type + ', ' + Math.round(data.file.size*10/1024)/10 + ' kB'));
    this.$editor.html($output);
  },

  onBlockRender: function(){
    /* Setup the upload button */
    this.$inputs.find('button').bind('click', function(ev){ ev.preventDefault(); });
    this.$inputs.find('input').on('change', _.bind(function(ev){
      this.onDrop(ev.currentTarget);
    }, this));
  },

  onUploadSuccess : function(data) {
    this.setData(data);
    this.ready();
  },

  onUploadError : function(jqXHR, status, errorThrown){
    this.addMessage('Upload Error');
    this.ready();
  },

  onDrop: function(transferData){
    var file = transferData.files[0],
        urlAPI = (typeof URL !== "undefined") ? URL : (typeof webkitURL !== "undefined") ? webkitURL : null,
        $output = $('<div>');

    // Handle one upload at a time
    this.loading();

    this.$inputs.hide();
    $output.append($('<a>', { href: urlAPI.createObjectURL(file), download: file.name, target: '_blank' }).text(file.name));
    $output.append($('<div>').addClass('type').text(file.type + ', ' + Math.round(file.size*10/1024)/10 + ' kB'));
    this.$editor.html($output).show();

    this.uploader(file, this.onUploadSuccess, this.onUploadError);
  }
});
