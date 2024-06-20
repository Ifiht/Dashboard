from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile

firefox_profile = FirefoxProfile()
options = Options()
options.add_argument("--headless")
#options.headless = True
options.profile = firefox_profile
browser = webdriver.Firefox(options=options, executable_path='/usr/local/bin/geckodriver')
browser.get('http://selenium.dev/')

browser.find_element_by_tag_name('body').screenshot('web_screenshot.png')

browser.quit()
