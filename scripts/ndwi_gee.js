// Define AOI (draw in GEE or import shapefile)
var aoi = geometry;

// Load Sentinel-2 data
var image = ee.ImageCollection("COPERNICUS/S2_SR")
  .filterBounds(aoi)
  .filterDate('2022-01-01', '2022-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .median();

// NDWI calculation
var ndwi = image.normalizedDifference(['B3', 'B8']).rename('NDWI');

// Visualization
Map.centerObject(aoi, 10);
Map.addLayer(ndwi, {min: -1, max: 1, palette: ['brown','white','blue']}, 'NDWI');

// Water mask
var water = ndwi.gt(0);
Map.addLayer(water.updateMask(water), {palette: ['blue']}, 'Water');

// Export
Export.image.toDrive({
  image: water,
  description: 'Water_Mask_NDWI',
  scale: 30,
  region: aoi
});