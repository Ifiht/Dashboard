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
browser.get('https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C')
browser.find_element(By.ID, 'WeatherOverviewCurrentSection').screenshot('res/wx-summary.png')
browser.find_element(By.ID, 'WeatherMapMini-ScreenWidthServerWeather-c3').screenshot('res/wx-map.png')
# Weather - pollen
browser.get('https://www.msn.com/en-us/weather/pollen/in-Cupertino,CA?loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C&ocid=msedgntp&cvid=7efc5b0263864686bc85a613e28a2e5d&day=1')
browser.find_element(By.CLASS_NAME, 'wPollenDailyDetailSummarySection-DS-EntryPoint1-3').screenshot('res/wx-pollen.png')


browser.quit()
