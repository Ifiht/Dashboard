import time
import requests
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile

# Create temp profile
firefox_profile = FirefoxProfile()

# Configure options
options = Options()
options.add_argument("--headless")
options.profile = firefox_profile
options.add_argument("window-size=1920,1080")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0")
window_width  = 1920
window_height = 1080

# Setup firefox driver
browser = webdriver.Firefox(options=options, executable_path='/usr/local/bin/geckodriver')

#====// Navigate to URLs & Screenshot //====#
# Finance - Buffet Indicator
browser.get('https://currentmarketvaluation.com/models/buffett-indicator.php')
time.sleep(1)
browser.find_element(By.CLASS_NAME, 'model-chart-wide-new').screenshot('res/buf-indct.png')
# NOAA - 7 day tropical weather, Atlantic
data = requests.get("https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png").content
f = open('res/two_atl_7d.png','wb')
f.write(data)
f.close()

browser.quit()
