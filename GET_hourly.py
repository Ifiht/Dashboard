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

# Setup firefox driver
browser = webdriver.Firefox(options=options, executable_path='/usr/local/bin/geckodriver')

#====// Navigate to URLs & Screenshot //====#
# Wikipedia - today
browser.get('https://en.wikipedia.org/wiki/Main_Page')
browser.find_element(By.ID, 'mp-itn').screenshot('res/wiki-itn.png')
browser.find_element(By.ID, 'mp-otd').screenshot('res/wiki-otd.png')
# Weather - general & map
browser.get('https://www.wunderground.com/weather/us/ca/cupertino')
browser.find_element(By.CLASS_NAME, 'city-conditions row collapse ng-star-inserted').screenshot('res/wx-summary.png')
browser.find_element(By.CLASS_NAME, 'city-map-wrapper').screenshot('res/wx-map.png')
# Weather - pollen
browser.get('https://www.wunderground.com/health/us/ca/cupertino')
browser.find_element(By.ID, 'airqualityindex_section').screenshot('res/wx-pollen.png')


browser.quit()
