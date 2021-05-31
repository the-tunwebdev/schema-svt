am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  const media= window.matchMedia('(max-width:768px')
  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
  chart.legend = new am4charts.Legend();
  
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  
  networkSeries.data = [{
    // fatma 
    name: 'composites',value: 15,
    children: [{
      name: 'Matrice',value: 10,
      children: [{
        name: 'metalique', value: 5
      }, {
        name: 'ceramique', value: 5
      }]
    }, {
      name: 'Renfort',value: 10,
      children: [{
        name: 'Aramide', value: 5
      }, {
        name: 'polystres', value: 5
      }, {
        name: 'verre', value: 5
      }, {
        name: 'Bois', value: 5
      },, {
        name: 'carbonne', value: 5
      }, {
        name: 'coton/papier', value: 5
      }]
    }]
  }, {
    // yassine
    name: 'Organiques',value: 15,
    children: [{
      name: 'Origines Animales',value: 10,
      children: [{
        name: 'Textiles Animales', value: 5
      }, {
        name: 'Os', value: 5
      }]
    }, {
      name: 'Origines Vegetales',value: 10,
      children: [{
        name: 'Bois', value: 5
      }, {
        name: 'Celluloses', value: 5
      }, {
        name: 'Plantes Textiles', value: 5
      }]}
      , {
        name: 'Origines Synthetiques',value: 10,
        children: [{
          name: 'Elastomeres', value: 5
        }, {
          name: 'Thermo durcis', value: 5
        }, {
          name: 'Plantes Textiles', value: 5
        }]
    }]
  }, {
    // meriem
    name: 'les materiaux mineraux',value: 15,
    children: [{
      name: 'les materiaux metalliques',value: 10,
      children: [{
        name: 'diamond', value: 5
      }, {
        name: 'platre', value: 5
      }]
    }, {
      name: 'Les roches',value: 10,
      children: [{
        name: 'sable', value: 5
      }, {
        name: 'piere', value: 5
      }]}
      , {
        name: 'les metaux',value: 10,
        children: [{
          name: 'fer', value: 5
        }, {
          name: 'or', value: 5
        }]
    },{
      name: 'polymetres organiques',value: 10,
    }]
  }];
  
  networkSeries.dataFields.linkWith = "linkWith";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.id = "name";
  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.children = "children";
  
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;
  
  networkSeries.nodes.template.label.text = "{name}"
  networkSeries.fontSize = 20;
  networkSeries.maxLevels = 2;
  // if(media.matches){
  //   networkSeries.maxRadius = am4core.percent(15);


  // }else{
  // networkSeries.maxRadius = am4core.percent(10);

  // }
  networkSeries.maxRadius = am4core.percent(10);
  networkSeries.manyBodyStrength = -16;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  
  }); // end am4core.ready()