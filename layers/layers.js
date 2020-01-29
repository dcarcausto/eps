var wms_layers = [];

var format_Provincia_0 = new ol.format.GeoJSON();
var features_Provincia_0 = format_Provincia_0.readFeatures(json_Provincia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_0.addFeatures(features_Provincia_0);
var lyr_Provincia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincia_0, 
                style: style_Provincia_0,
                interactive: true,
                title: '<img src="styles/legend/Provincia_0.png" /> Provincia'
            });
var format_Distrito_1 = new ol.format.GeoJSON();
var features_Distrito_1 = format_Distrito_1.readFeatures(json_Distrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distrito_1.addFeatures(features_Distrito_1);
var lyr_Distrito_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distrito_1, 
                style: style_Distrito_1,
                interactive: true,
                title: '<img src="styles/legend/Distrito_1.png" /> Distrito'
            });
var format_Manzanas_2 = new ol.format.GeoJSON();
var features_Manzanas_2 = format_Manzanas_2.readFeatures(json_Manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_2.addFeatures(features_Manzanas_2);
var lyr_Manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_2, 
                style: style_Manzanas_2,
                interactive: false,
                title: '<img src="styles/legend/Manzanas_2.png" /> Manzanas'
            });
var format_Lotes_3 = new ol.format.GeoJSON();
var features_Lotes_3 = format_Lotes_3.readFeatures(json_Lotes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_3.addFeatures(features_Lotes_3);
var lyr_Lotes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lotes_3, 
                style: style_Lotes_3,
                interactive: false,
                title: '<img src="styles/legend/Lotes_3.png" /> Lotes'
            });
var format_Lote_Nro_4 = new ol.format.GeoJSON();
var features_Lote_Nro_4 = format_Lote_Nro_4.readFeatures(json_Lote_Nro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_Nro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_Nro_4.addFeatures(features_Lote_Nro_4);
var lyr_Lote_Nro_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lote_Nro_4, 
                style: style_Lote_Nro_4,
                interactive: false,
                title: '<img src="styles/legend/Lote_Nro_4.png" /> Lote_Nro'
            });
var format_Vias_5 = new ol.format.GeoJSON();
var features_Vias_5 = format_Vias_5.readFeatures(json_Vias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_5.addFeatures(features_Vias_5);
var lyr_Vias_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_5, 
                style: style_Vias_5,
                interactive: false,
                title: '<img src="styles/legend/Vias_5.png" /> Vias'
            });
var format_Cajas_6 = new ol.format.GeoJSON();
var features_Cajas_6 = format_Cajas_6.readFeatures(json_Cajas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cajas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cajas_6.addFeatures(features_Cajas_6);
var lyr_Cajas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cajas_6, 
                style: style_Cajas_6,
                interactive: false,
                title: '<img src="styles/legend/Cajas_6.png" /> Cajas'
            });

lyr_Provincia_0.setVisible(true);lyr_Distrito_1.setVisible(true);lyr_Manzanas_2.setVisible(true);lyr_Lotes_3.setVisible(true);lyr_Lote_Nro_4.setVisible(true);lyr_Vias_5.setVisible(true);lyr_Cajas_6.setVisible(true);
var layersList = [lyr_Provincia_0,lyr_Distrito_1,lyr_Manzanas_2,lyr_Lotes_3,lyr_Lote_Nro_4,lyr_Vias_5,lyr_Cajas_6];
lyr_Provincia_0.set('fieldAliases', {'LAYER': 'LAYER', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBPROV': 'NOMBPROV', 'CAPITAL': 'CAPITAL', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Distrito_1.set('fieldAliases', {'LAYER': 'LAYER', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'IDDIST': 'IDDIST', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'NOM_CAP': 'NOM_CAP', 'CAT_CAP': 'CAT_CAP', 'ALT_DIST': 'ALT_DIST', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Manzanas_2.set('fieldAliases', {'LAYER': 'LAYER', 'NÃºmero': 'NÃºmero', 'Sector': 'Sector', 'Mzna': 'Mzna', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Lotes_3.set('fieldAliases', {'Layer': 'Layer', 'INSCRIP': 'INSCRIP', 'Dibujado': 'Dibujado', 'PREREGION': 'PREREGION', 'PREZONA': 'PREZONA', 'PRESECTOR': 'PRESECTOR', 'PREMZN': 'PREMZN', 'PRELOTE': 'PRELOTE', 'PRESUBLOTE': 'PRESUBLOTE', 'NOMBRES': 'NOMBRES', 'DIRECCION': 'DIRECCION', 'TIP_ACTIV': 'TIP_ACTIV', 'TIP_ABAST': 'TIP_ABAST', 'TIP_CONSTR': 'TIP_CONSTR', 'TIP_SERV': 'TIP_SERV', 'EST_SERV': 'EST_SERV', 'DIA_AGUA': 'DIA_AGUA', 'MAT_PAVIME': 'MAT_PAVIME', 'MAT_VEREDA': 'MAT_VEREDA', 'TIPO_INGRE': 'TIPO_INGRE', 'MAT_CAJA_A': 'MAT_CAJA_A', 'LOC_CAJA_A': 'LOC_CAJA_A', 'EST_CAJA_A': 'EST_CAJA_A', 'MAT_TAPA_A': 'MAT_TAPA_A', 'EST_TAPA_A': 'EST_TAPA_A', 'LLAVES_AG': 'LLAVES_AG', 'POSI_MEDI_': 'POSI_MEDI_', 'DES_CJ_AG': 'DES_CJ_AG', 'MAT_CN_AG': 'MAT_CN_AG', 'DIA_DESA': 'DIA_DESA', 'MAT_CAJA_D': 'MAT_CAJA_D', 'LOC_CAJA_D': 'LOC_CAJA_D', 'EST_CAJA_D': 'EST_CAJA_D', 'MAT_TAPA_D': 'MAT_TAPA_D', 'EST_TAPA_D': 'EST_TAPA_D', 'FUGAS_DE': 'FUGAS_DE', 'MAR_MED': 'MAR_MED', 'N_MEDIDOR': 'N_MEDIDOR', 'EST_MEDI': 'EST_MEDI', 'MOD_MED': 'MOD_MED', 'FCH_INSTAL': 'FCH_INSTAL', 'EMPADRONAD': 'EMPADRONAD', 'FECHA_EMP': 'FECHA_EMP', 'DIGITADOR': 'DIGITADOR', 'FECHA_DIG': 'FECHA_DIG', 'SUPERVISOR': 'SUPERVISOR', 'FECHA_SUP': 'FECHA_SUP', 'Est_Campo': 'Est_Campo', 'Sector': 'Sector', 'Mzna': 'Mzna', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Lote_Nro_4.set('fieldAliases', {'NAME': 'NAME', 'COD_UBICA': 'COD_UBICA', 'Cod_Nuevo': 'Cod_Nuevo', 'Sector': 'Sector', 'Mzna': 'Mzna', });
lyr_Vias_5.set('fieldAliases', {'Nombre': 'Nombre', 'Sector': 'Sector', 'Sector_A': 'Sector_A', 'Shape_STLe': 'Shape_STLe', });
lyr_Cajas_6.set('fieldAliases', {'Layer': 'Layer', 'INSCRIP': 'INSCRIP', 'PREREGION': 'PREREGION', 'PREZONA': 'PREZONA', 'PRESECTOR': 'PRESECTOR', 'PREMZN': 'PREMZN', 'PRELOTE': 'PRELOTE', 'PRESUBLOTE': 'PRESUBLOTE', 'NOMBRES': 'NOMBRES', 'DIRECCION': 'DIRECCION', 'TIP_ACTIV': 'TIP_ACTIV', 'TIP_ABAST': 'TIP_ABAST', 'TIP_CONSTR': 'TIP_CONSTR', 'TIP_SERV': 'TIP_SERV', 'EST_SERV': 'EST_SERV', 'DIA_AGUA': 'DIA_AGUA', 'MAT_PAVIME': 'MAT_PAVIME', 'MAT_VEREDA': 'MAT_VEREDA', 'TIPO_INGRE': 'TIPO_INGRE', 'MAT_CAJA_A': 'MAT_CAJA_A', 'LOC_CAJA_A': 'LOC_CAJA_A', 'EST_CAJA_A': 'EST_CAJA_A', 'MAT_TAPA_A': 'MAT_TAPA_A', 'EST_TAPA_A': 'EST_TAPA_A', 'LLAVES_AG': 'LLAVES_AG', 'POSI_MEDI_': 'POSI_MEDI_', 'DES_CJ_AG': 'DES_CJ_AG', 'MAT_CN_AG': 'MAT_CN_AG', 'DIA_DESA': 'DIA_DESA', 'MAT_CAJA_D': 'MAT_CAJA_D', 'LOC_CAJA_D': 'LOC_CAJA_D', 'EST_CAJA_D': 'EST_CAJA_D', 'MAT_TAPA_D': 'MAT_TAPA_D', 'EST_TAPA_D': 'EST_TAPA_D', 'FUGAS_DE': 'FUGAS_DE', 'MAR_MED': 'MAR_MED', 'N_MEDIDOR': 'N_MEDIDOR', 'EST_MEDI': 'EST_MEDI', 'MOD_MED': 'MOD_MED', 'FCH_INSTAL': 'FCH_INSTAL', 'EMPADRONAD': 'EMPADRONAD', 'FECHA_EMP': 'FECHA_EMP', 'DIGITADOR': 'DIGITADOR', 'FECHA_DIG': 'FECHA_DIG', 'SUPERVISOR': 'SUPERVISOR', 'FECHA_SUP': 'FECHA_SUP', 'Sector': 'Sector', 'Mzana': 'Mzana', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Provincia_0.set('fieldImages', {'LAYER': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBPROV': 'TextEdit', 'CAPITAL': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Distrito_1.set('fieldImages', {'LAYER': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'IDDIST': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'NOM_CAP': 'TextEdit', 'CAT_CAP': 'TextEdit', 'ALT_DIST': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Manzanas_2.set('fieldImages', {'LAYER': 'TextEdit', 'NÃºmero': 'TextEdit', 'Sector': 'TextEdit', 'Mzna': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Lotes_3.set('fieldImages', {'Layer': 'TextEdit', 'INSCRIP': 'TextEdit', 'Dibujado': 'TextEdit', 'PREREGION': 'TextEdit', 'PREZONA': 'TextEdit', 'PRESECTOR': 'TextEdit', 'PREMZN': 'TextEdit', 'PRELOTE': 'TextEdit', 'PRESUBLOTE': 'TextEdit', 'NOMBRES': 'TextEdit', 'DIRECCION': 'TextEdit', 'TIP_ACTIV': 'TextEdit', 'TIP_ABAST': 'TextEdit', 'TIP_CONSTR': 'TextEdit', 'TIP_SERV': 'TextEdit', 'EST_SERV': 'TextEdit', 'DIA_AGUA': 'TextEdit', 'MAT_PAVIME': 'TextEdit', 'MAT_VEREDA': 'TextEdit', 'TIPO_INGRE': 'TextEdit', 'MAT_CAJA_A': 'TextEdit', 'LOC_CAJA_A': 'TextEdit', 'EST_CAJA_A': 'TextEdit', 'MAT_TAPA_A': 'TextEdit', 'EST_TAPA_A': 'TextEdit', 'LLAVES_AG': 'TextEdit', 'POSI_MEDI_': 'TextEdit', 'DES_CJ_AG': 'TextEdit', 'MAT_CN_AG': 'TextEdit', 'DIA_DESA': 'TextEdit', 'MAT_CAJA_D': 'TextEdit', 'LOC_CAJA_D': 'TextEdit', 'EST_CAJA_D': 'TextEdit', 'MAT_TAPA_D': 'TextEdit', 'EST_TAPA_D': 'TextEdit', 'FUGAS_DE': 'TextEdit', 'MAR_MED': 'TextEdit', 'N_MEDIDOR': 'TextEdit', 'EST_MEDI': 'TextEdit', 'MOD_MED': 'TextEdit', 'FCH_INSTAL': 'DateTime', 'EMPADRONAD': 'TextEdit', 'FECHA_EMP': 'DateTime', 'DIGITADOR': 'TextEdit', 'FECHA_DIG': 'DateTime', 'SUPERVISOR': 'TextEdit', 'FECHA_SUP': 'DateTime', 'Est_Campo': 'TextEdit', 'Sector': 'TextEdit', 'Mzna': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Lote_Nro_4.set('fieldImages', {'NAME': '', 'COD_UBICA': '', 'Cod_Nuevo': '', 'Sector': '', 'Mzna': '', });
lyr_Vias_5.set('fieldImages', {'Nombre': '', 'Sector': '', 'Sector_A': '', 'Shape_STLe': '', });
lyr_Cajas_6.set('fieldImages', {'Layer': '', 'INSCRIP': '', 'PREREGION': '', 'PREZONA': '', 'PRESECTOR': '', 'PREMZN': '', 'PRELOTE': '', 'PRESUBLOTE': '', 'NOMBRES': '', 'DIRECCION': '', 'TIP_ACTIV': '', 'TIP_ABAST': '', 'TIP_CONSTR': '', 'TIP_SERV': '', 'EST_SERV': '', 'DIA_AGUA': '', 'MAT_PAVIME': '', 'MAT_VEREDA': '', 'TIPO_INGRE': '', 'MAT_CAJA_A': '', 'LOC_CAJA_A': '', 'EST_CAJA_A': '', 'MAT_TAPA_A': '', 'EST_TAPA_A': '', 'LLAVES_AG': '', 'POSI_MEDI_': '', 'DES_CJ_AG': '', 'MAT_CN_AG': '', 'DIA_DESA': '', 'MAT_CAJA_D': '', 'LOC_CAJA_D': '', 'EST_CAJA_D': '', 'MAT_TAPA_D': '', 'EST_TAPA_D': '', 'FUGAS_DE': '', 'MAR_MED': '', 'N_MEDIDOR': '', 'EST_MEDI': '', 'MOD_MED': '', 'FCH_INSTAL': '', 'EMPADRONAD': '', 'FECHA_EMP': '', 'DIGITADOR': '', 'FECHA_DIG': '', 'SUPERVISOR': '', 'FECHA_SUP': '', 'Sector': '', 'Mzana': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_Provincia_0.set('fieldLabels', {'LAYER': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBPROV': 'inline label', 'CAPITAL': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Distrito_1.set('fieldLabels', {'LAYER': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'IDDIST': 'no label', 'NOMBDIST': 'inline label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'NOM_CAP': 'no label', 'CAT_CAP': 'no label', 'ALT_DIST': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Manzanas_2.set('fieldLabels', {'LAYER': 'no label', 'NÃºmero': 'no label', 'Sector': 'no label', 'Mzna': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Lotes_3.set('fieldLabels', {'Layer': 'no label', 'INSCRIP': 'no label', 'Dibujado': 'no label', 'PREREGION': 'no label', 'PREZONA': 'no label', 'PRESECTOR': 'no label', 'PREMZN': 'no label', 'PRELOTE': 'no label', 'PRESUBLOTE': 'no label', 'NOMBRES': 'no label', 'DIRECCION': 'no label', 'TIP_ACTIV': 'no label', 'TIP_ABAST': 'no label', 'TIP_CONSTR': 'no label', 'TIP_SERV': 'no label', 'EST_SERV': 'no label', 'DIA_AGUA': 'no label', 'MAT_PAVIME': 'no label', 'MAT_VEREDA': 'no label', 'TIPO_INGRE': 'no label', 'MAT_CAJA_A': 'no label', 'LOC_CAJA_A': 'no label', 'EST_CAJA_A': 'no label', 'MAT_TAPA_A': 'no label', 'EST_TAPA_A': 'no label', 'LLAVES_AG': 'no label', 'POSI_MEDI_': 'no label', 'DES_CJ_AG': 'no label', 'MAT_CN_AG': 'no label', 'DIA_DESA': 'no label', 'MAT_CAJA_D': 'no label', 'LOC_CAJA_D': 'no label', 'EST_CAJA_D': 'no label', 'MAT_TAPA_D': 'no label', 'EST_TAPA_D': 'no label', 'FUGAS_DE': 'no label', 'MAR_MED': 'no label', 'N_MEDIDOR': 'no label', 'EST_MEDI': 'no label', 'MOD_MED': 'no label', 'FCH_INSTAL': 'no label', 'EMPADRONAD': 'no label', 'FECHA_EMP': 'no label', 'DIGITADOR': 'no label', 'FECHA_DIG': 'no label', 'SUPERVISOR': 'no label', 'FECHA_SUP': 'no label', 'Est_Campo': 'no label', 'Sector': 'no label', 'Mzna': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Lote_Nro_4.set('fieldLabels', {'NAME': 'no label', 'COD_UBICA': 'no label', 'Cod_Nuevo': 'no label', 'Sector': 'no label', 'Mzna': 'no label', });
lyr_Vias_5.set('fieldLabels', {'Nombre': 'no label', 'Sector': 'no label', 'Sector_A': 'no label', 'Shape_STLe': 'no label', });
lyr_Cajas_6.set('fieldLabels', {'Layer': 'no label', 'INSCRIP': 'no label', 'PREREGION': 'no label', 'PREZONA': 'no label', 'PRESECTOR': 'no label', 'PREMZN': 'no label', 'PRELOTE': 'no label', 'PRESUBLOTE': 'no label', 'NOMBRES': 'no label', 'DIRECCION': 'no label', 'TIP_ACTIV': 'no label', 'TIP_ABAST': 'no label', 'TIP_CONSTR': 'no label', 'TIP_SERV': 'no label', 'EST_SERV': 'no label', 'DIA_AGUA': 'no label', 'MAT_PAVIME': 'no label', 'MAT_VEREDA': 'no label', 'TIPO_INGRE': 'no label', 'MAT_CAJA_A': 'no label', 'LOC_CAJA_A': 'no label', 'EST_CAJA_A': 'no label', 'MAT_TAPA_A': 'no label', 'EST_TAPA_A': 'no label', 'LLAVES_AG': 'no label', 'POSI_MEDI_': 'no label', 'DES_CJ_AG': 'no label', 'MAT_CN_AG': 'no label', 'DIA_DESA': 'no label', 'MAT_CAJA_D': 'no label', 'LOC_CAJA_D': 'no label', 'EST_CAJA_D': 'no label', 'MAT_TAPA_D': 'no label', 'EST_TAPA_D': 'no label', 'FUGAS_DE': 'no label', 'MAR_MED': 'no label', 'N_MEDIDOR': 'no label', 'EST_MEDI': 'no label', 'MOD_MED': 'no label', 'FCH_INSTAL': 'no label', 'EMPADRONAD': 'no label', 'FECHA_EMP': 'no label', 'DIGITADOR': 'no label', 'FECHA_DIG': 'no label', 'SUPERVISOR': 'no label', 'FECHA_SUP': 'no label', 'Sector': 'no label', 'Mzana': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Cajas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});