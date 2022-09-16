import requests
import time
import json
import pydirectinput


if requests.get("https://conga.coombszy.com/health").status_code == 200:
    while True:
        time.sleep(0.1)
        keys = requests.get("https://conga.coombszy.com/items/key", headers={"Authorization":"key"})
        if keys.status_code == 200:
            for key in keys.json():
                pydirectinput.keyDown(key['content']['keyPress'])
