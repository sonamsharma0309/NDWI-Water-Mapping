# 🌊 Mapping Water Bodies using NDWI

## 📌 Project Code: P1

## 📖 Overview

This project identifies and maps surface water bodies using the **Normalized Difference Water Index (NDWI)** from satellite imagery.

---

## 🎯 Objective

To detect and delineate water bodies using NDWI derived from satellite data.

---

## 🛰️ Data Used

* Sentinel-2 MSI / Landsat-8 OLI
* Bands Used:

  * Green Band
  * Near Infrared (NIR)

---

## 🧮 NDWI Formula

NDWI = (Green - NIR) / (Green + NIR)

---

## 🗺️ Study Area

Example:

* Chilika Lake, Odisha *(or your local area)*

---

## ⚙️ Methodology

### QGIS Workflow

1. Load satellite bands (Green & NIR)
2. Clip using AOI shapefile
3. Apply NDWI formula in Raster Calculator
4. Reclassify (NDWI > 0 = Water)
5. Convert raster to vector
6. Calculate area
7. Create final map layout

---

### Google Earth Engine Workflow

* Load Sentinel-2 dataset
* Filter by date and cloud cover
* Compute NDWI
* Extract water mask
* Export raster

---

## 📊 Results

* NDWI raster layer
* Water body polygons
* Area statistics
* Final map layout

---

## ⚠️ Limitations

* Shadow misclassification
* Seasonal variation
* Cloud interference

---

## 🧠 Conclusion

NDWI is a fast, reliable, and widely used method for water body detection using remote sensing data.

---

## 📂 Data Sources

* https://earthexplorer.usgs.gov/
* https://scihub.copernicus.eu/
* https://gadm.org/
* https://www.diva-gis.org/gdata

---

## 👨‍💻 Author

Your Name
