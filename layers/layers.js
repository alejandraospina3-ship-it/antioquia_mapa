var wms_layers = [];

var format_municipios_antioquia_0 = new ol.format.GeoJSON();
var features_municipios_antioquia_0 = format_municipios_antioquia_0.readFeatures(json_municipios_antioquia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_antioquia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_antioquia_0.addFeatures(features_municipios_antioquia_0);
var lyr_municipios_antioquia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_antioquia_0, 
                style: style_municipios_antioquia_0,
                popuplayertitle: 'municipios_antioquia',
                interactive: true,
                title: '<img src="styles/legend/municipios_antioquia_0.png" /> municipios_antioquia'
            });
var format_subregiones_antioquia_1 = new ol.format.GeoJSON();
var features_subregiones_antioquia_1 = format_subregiones_antioquia_1.readFeatures(json_subregiones_antioquia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subregiones_antioquia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subregiones_antioquia_1.addFeatures(features_subregiones_antioquia_1);
var lyr_subregiones_antioquia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subregiones_antioquia_1, 
                style: style_subregiones_antioquia_1,
                popuplayertitle: 'subregiones_antioquia',
                interactive: true,
    title: 'subregiones_antioquia<br />\
    <img src="styles/legend/subregiones_antioquia_1_0.png" /> Bajo Cauca<br />\
    <img src="styles/legend/subregiones_antioquia_1_1.png" /> Magdalena Medio<br />\
    <img src="styles/legend/subregiones_antioquia_1_2.png" /> Nordeste<br />\
    <img src="styles/legend/subregiones_antioquia_1_3.png" /> Norte<br />\
    <img src="styles/legend/subregiones_antioquia_1_4.png" /> Occidente<br />\
    <img src="styles/legend/subregiones_antioquia_1_5.png" /> Oriente<br />\
    <img src="styles/legend/subregiones_antioquia_1_6.png" /> Suroeste<br />\
    <img src="styles/legend/subregiones_antioquia_1_7.png" /> Urabá<br />\
    <img src="styles/legend/subregiones_antioquia_1_8.png" /> Valle de Aburrá<br />\
    <img src="styles/legend/subregiones_antioquia_1_9.png" /> <br />' });

lyr_municipios_antioquia_0.setVisible(true);lyr_subregiones_antioquia_1.setVisible(true);
var layersList = [lyr_municipios_antioquia_0,lyr_subregiones_antioquia_1];
lyr_municipios_antioquia_0.set('fieldAliases', {'dpto_ccdgo': 'dpto_ccdgo', 'mpio_ccdgo': 'mpio_ccdgo', 'mpio_cdpmp': 'mpio_cdpmp', 'dpto_cnmbr': 'dpto_cnmbr', 'mpio_cnmbr': 'mpio_cnmbr', 'mpio_crslc': 'mpio_crslc', 'mpio_tipo': 'mpio_tipo', 'mpio_narea': 'mpio_narea', 'mpio_nano': 'mpio_nano', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'SUBREGIÓN': 'SUBREGIÓN', });
lyr_subregiones_antioquia_1.set('fieldAliases', {'fid': 'fid', 'SUBREGIÓN': 'SUBREGIÓN', });
lyr_municipios_antioquia_0.set('fieldImages', {'dpto_ccdgo': 'TextEdit', 'mpio_ccdgo': 'TextEdit', 'mpio_cdpmp': 'TextEdit', 'dpto_cnmbr': 'TextEdit', 'mpio_cnmbr': 'TextEdit', 'mpio_crslc': 'TextEdit', 'mpio_tipo': 'TextEdit', 'mpio_narea': 'TextEdit', 'mpio_nano': 'Range', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'SUBREGIÓN': 'TextEdit', });
lyr_subregiones_antioquia_1.set('fieldImages', {'fid': 'TextEdit', 'SUBREGIÓN': 'TextEdit', });
lyr_municipios_antioquia_0.set('fieldLabels', {'dpto_ccdgo': 'no label', 'mpio_ccdgo': 'no label', 'mpio_cdpmp': 'no label', 'dpto_cnmbr': 'no label', 'mpio_cnmbr': 'no label', 'mpio_crslc': 'no label', 'mpio_tipo': 'no label', 'mpio_narea': 'no label', 'mpio_nano': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'SUBREGIÓN': 'no label', });
lyr_subregiones_antioquia_1.set('fieldLabels', {'fid': 'no label', 'SUBREGIÓN': 'no label', });
lyr_subregiones_antioquia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});