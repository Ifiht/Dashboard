from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile

firefox_profile = FirefoxProfile()
options = Options()
options.add_argument("--headless")
#options.headless = True
options.profile = firefox_profile
browser = webdriver.Firefox(options=options, executable_path='/usr/local/bin/geckodriver')
browser.get('https://en.wikipedia.org/wiki/Main_Page')

browser.find_element(By.ID, 'mp-itn').screenshot('res/wiki-itn.png')

browser.quit()
