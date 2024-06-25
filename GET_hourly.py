import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile

# Create temp profile
firefox_profile = FirefoxProfile()
with open('urls.json') as f:
    urls = json.load(f)

# Configure options
options = Options()
options.add_argument("--headless")
options.add_argument("--width=1280")
options.add_argument("--height=720")
options.profile = firefox_profile
options.add_argument("window-size=1920,1080")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0")
window_width  = 1280
window_height = 720

# Setup firefox driver
browser = webdriver.Firefox(options=options, executable_path='/usr/local/bin/geckodriver')

#====// Navigate to URLs & Screenshot //====#
# Wikipedia - today
browser.get('https://en.wikipedia.org/wiki/Main_Page')
time.sleep(0.5)
browser.find_element(By.ID, 'mp-itn').screenshot('res/wiki-itn.png')
browser.find_element(By.ID, 'mp-otd').screenshot('res/wiki-otd.png')
# Weather - general & map
browser.get(urls['msn-weather'])
time.sleep(1)
browser.find_element(By.CLASS_NAME, 'backgroundContainerCompact-DS-EntryPoint1-1').screenshot('res/wx-summary.png')
browser.find_element(By.CLASS_NAME, 'hourlyToggleContent-DS-EntryPoint1-1').screenshot('res/wx-hourly.png')
browser.find_element(By.ID, 'weatherMiniMapContainer').screenshot('res/wx-map.png')
# Weather - pollen
browser.get(urls['msn-pollen'])
time.sleep(1)
browser.find_element(By.CLASS_NAME, 'wPollenDailyDetailSummarySection-DS-EntryPoint1-3').screenshot('res/wx-pollen.png')
# Weather - space
browser.get('https://www.swpc.noaa.gov/')
time.sleep(0.5)
browser.find_element(By.ID, 'block-swx-noaa-scales-noaascales').screenshot('res/swpc-scales.png')
browser.find_element(By.ID, 'block-swx-summary-swx-summary').screenshot('res/swpc-sum.png')
# Financials - WSJ
browser.get('https://www.wsj.com/market-data')
time.sleep(1.5)
browser.find_element(By.CLASS_NAME, 'WSJTables--table--1QzSOCfq ').screenshot('res/fin-mkts.png')

browser.quit()
