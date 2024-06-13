# project3-group3

![download](https://github.com/K-G-Witt/project3-group3/assets/70048005/62a35724-741b-46c3-a663-bba10843c8af)

# Incidence of Cardiovascular Disease in the United States by Age, Ethnicity, Gender, and Year:
The source data collected for this project was produced by the Centers for Disease Control and Prevention (CDC), Division for Heart Disease and Stroke Prevention. These datasets document rates and trends in cardiovascular disease (i.e., heart disease and stroke) mortality by US State, County (or county equivalent), age group (ages 35–64 years, ages 65 years and older), race/ethnicity (non-Hispanic American Indian/Alaska Native, non-Hispanic Asian/Pacific Islander, non-Hispanic Black, Hispanic, non-Hispanic White), and sex (women, men). 

Cause of death is defined according to the underlying cause of death listed on the death certificate and classified according to the following International Classification of Disease, version 10 (ICD-10) codes:
1. Cardiovascular Disease Overall (CVD): ICD-10 codes I00-I99;
2. Heart disease: ICD-10 codes I00-I09, I11, I13, I20–I51;
3. Coronary heart disease (CHD): ICD-10 codes I20-I25;
4. Heart failure: ICD-10 code I50; and
5. Stroke: ICD‐10 codes I60-I69.

## Installation and Run Instructions:
This repo contains the following:
1. In the **Resources** subfolder, each year of data from 1999 to 2019 are saved as **.csv** files
2. The **project3-group3_ERD** provides the relationship between these **.csv** files
3. **graph_visualisation.ipynb** is the script to recreate the graph visualisations
4. **mapping_visualisation.ipynb** is the script to recreate the **.csv** files called in the **index.html** script
5. **index.html** is the script to recreate the mapping visualisation in Google Chrome
6. **logic.js** is called by the **index.html** to support the mapping visualisation
7. **style.css** if called by the **index.html** to support the mapping visualisation

List here anything we had to pip install to add to conda environment to install new packages, etc.


## Usage Instructions:

### Graph Visualisations:

### Mapping Visualisation:
To avoid the **index.html** being blocked by your computer's Cross-Origin Resource Sharing (CORS) policy, you will need to run the following steps before opening Google Chrome:
1. Open **Gitbash** and type: **python -m http.server 8000**
2. In your web browser, navigate to: **http://localhost:8000**
3. Next, navigate through your directories within your web browser to the folder containing the **index.html** file
4. Double-click on the **index.html** file to launch the map in Google Chrome




## Data Ethics Statement:
The CDC has made this data asset is publicly available to all without restrictions (public).



## Credits:
This code was compiled and written by Charles Morgan, Mahsa Hesampour, Riona Espedido, and Katrina Witt for Project 3 in the 2024 Data Analytics Boot Camp hosted by Monash University. 

## Additional credits are declared below:

### Reference material
Centers for Disease Control and Prevention, Division for Heart Disease and Stroke Prevention. Rates and Trends in Heart Disease and Stroke Mortality Among US Adults (35+) by County, Age Group, Race/Ethnicity, and Sex – 2000-2019: https://data.cdc.gov/Heart-Disease-Stroke-Prevention/Rates-and-Trends-in-Heart-Disease-and-Stroke-Morta/7b9s-s8ck/about_data (Accessed June 6 2024).



