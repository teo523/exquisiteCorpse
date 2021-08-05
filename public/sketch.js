   anychart.onDocumentReady(function () {

        anychart.data.loadJsonFile("net.json", function (data) {
        // create chart from loaded data
        console.log(data)
        var chart = anychart.graph(data);
        // set title
        chart.title("Music Exquisite Corpse");
        // access nodes
        var nodes = chart.nodes();

        

        // set the size of nodes
        nodes.normal().height(30);
        nodes.hovered().height(45);
        nodes.selected().height(45);

        // set the stroke of nodes
        nodes.normal().stroke(null);
        nodes.hovered().stroke("#333333", 3);
        nodes.selected().stroke("#333333", 3);
        
  
        chart.listen('click', function(e) {
    var tag = e.domTarget.tag;
    if (tag) {
      console.log(`Clicked ${tag.type} with ID ${tag.id}`);

      if (tag.type === 'node') {
        // get url from data directly
        var url;
        for (var i = 0; i < data.nodes.length; i++) {
          if (data.nodes[i].id === tag.id) {
            url = data.nodes[i].url;
            break;
          }
        }

        // open url
        
         
        window.open(url, '_blank');
      }
    }
  });
        // enable labels of nodes
        chart.nodes().labels().enabled(true);

        // configure labels of nodes
        chart.nodes().labels().format("{%id}");
        chart.nodes().labels().fontSize(12);
        chart.nodes().labels().fontWeight(600);
        // draw chart
        chart.container("container").draw();
        });
  });

