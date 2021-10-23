---
title: Installing Windows11 on Apple silicon/VMware Fusion
date: 2021-10-23 23:23:36
tags:
  - VMware
  - MacOS
---

### Download links:

VMware Fusion
[link](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGs4UDdRMERjaTh4eFhLb2pWVFQ1VWdoWm9LUXxBQ3Jtc0tudjczdHBURzhqNDl0VUtfLWdOQ25YN2NLRTJPS19RZ2ZCZDVxZEFha2RySGV2djl0ZWdXUW5BMlVRR0FMNG5CWjZ0YzJGTG1Ccm5oT0VqR1d6Nk9vbU9BWUR5SUZibGhqWnJyOUR0ZmVJNW5BVWVUVQ&q=https%3A%2F%2Fblogs.vmware.com%2Fteamfusion%2F2021%2F09%2Ffusion-for-m1-public-tech-preview-now-available.html)

UUP dump for Windows 11 builds https://uupdump.net/

### Virtual machine setting

Choose operating system -> Other 64bit arm
Hard disk setting -> more than 30GB

### .vmx file setting

1. go to the folder where you created
1. show package contents
1. open the xxx.vmx file you renamed before with texteditor
1. rename `arm-other-64` to `arm-windows11-64` in xxx.vmx

```
guestOS = "arm-windows11-64"
```

1. save and restart VMware Fusion

### Installing Windows11

1. use `Shift` + `Fn` + `F10` keys to open the CMD screen in the below setup step
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEjZrb29HTrHfwqc9hj8i1DJp58LINkVWe9okLZx9SK6ejoN599VUeFWyN9dnMIL5LWMNqt39Z1VWxjr2oTskASrE9NxHykKITrgqdd3_sZOKCB5J0CAPvty41zQXUA972HcdmzXKvdW1yo6W9vk7LwmGUt2xe9QOvrCnbRwRYT2vbl1y8DKPMJwZWNe=s2048" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="400" data-original-height="1612" data-original-width="2048" src="https://blogger.googleusercontent.com/img/a/AVvXsEjZrb29HTrHfwqc9hj8i1DJp58LINkVWe9okLZx9SK6ejoN599VUeFWyN9dnMIL5LWMNqt39Z1VWxjr2oTskASrE9NxHykKITrgqdd3_sZOKCB5J0CAPvty41zQXUA972HcdmzXKvdW1yo6W9vk7LwmGUt2xe9QOvrCnbRwRYT2vbl1y8DKPMJwZWNe=s400"/></a></div>
1. and then type `regedit` to open Registy editor
1. go to the location below

```
HKEY_LOCAL_MACHINE\SYSTEM\Setup
```

1. right click the `Setup` folder and hit new key name `LabConfig`
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEjeBJk6WFoVlhTi7bSxudDeGaXfOCt9WMvBYDMAkKN4__DLZrOGJ17SrlDkwRgxsmjqNFVDLvFN5b0OIZZQg5YPuSRhcMqPVeKMn29VpHWgPcYFUQK3_6Oh3WAMOlJVyZbi8xk-sUcLzhgWr4mNn5FOnZ2LBveXGslVD3tlbbw_d3-DcbzaIyo1UOuo=s1520" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="400" data-original-height="1196" data-original-width="1520" src="https://blogger.googleusercontent.com/img/a/AVvXsEjeBJk6WFoVlhTi7bSxudDeGaXfOCt9WMvBYDMAkKN4__DLZrOGJ17SrlDkwRgxsmjqNFVDLvFN5b0OIZZQg5YPuSRhcMqPVeKMn29VpHWgPcYFUQK3_6Oh3WAMOlJVyZbi8xk-sUcLzhgWr4mNn5FOnZ2LBveXGslVD3tlbbw_d3-DcbzaIyo1UOuo=s400"/></a></div>
1. create two dword 32bit values in `LabConfig`
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEg5Idgsxv6OsAvv0LTx8TgEKlgHdDarQOnZn5OJBFc4v4ASChQpoJ6mzHlmMITAnvgpDHpA3bu_kvqvxNdzVu0bY0DfB0nHLT9aJTj4U_HmAmLBl19Dxd8jz3h0mT3SB_kqwxj2O1-F2fMYtOS-sgc6gjQEvtjMgNbrIxPdK_J2YXEt2gPFjO0OVwC0=s1504" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="400" data-original-height="1080" data-original-width="1504" src="https://blogger.googleusercontent.com/img/a/AVvXsEg5Idgsxv6OsAvv0LTx8TgEKlgHdDarQOnZn5OJBFc4v4ASChQpoJ6mzHlmMITAnvgpDHpA3bu_kvqvxNdzVu0bY0DfB0nHLT9aJTj4U_HmAmLBl19Dxd8jz3h0mT3SB_kqwxj2O1-F2fMYtOS-sgc6gjQEvtjMgNbrIxPdK_J2YXEt2gPFjO0OVwC0=s400"/></a></div>
1. the names are going to call `BypassTPMCheck` and `BypassSecureBootCheck` and set the values to `1`
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEhSpm-LGRvNyWfnxWZdyqDEQvMpjg6Mavc_nJhNO_VV6UUPPwZSrFn0QRxzwCTJzGlO3FLEEzWD3XidPiaz6rZhX8QftBdSgueuRLNcboaIcOHl37vwLan5iYIsfDOdghXBHJkmRm63a2oxi5Nt-hezEIuQu3GERMtNVUy7Prs4p_D63D-3s6og19PF=s886" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="400" data-original-height="196" data-original-width="886" src="https://blogger.googleusercontent.com/img/a/AVvXsEhSpm-LGRvNyWfnxWZdyqDEQvMpjg6Mavc_nJhNO_VV6UUPPwZSrFn0QRxzwCTJzGlO3FLEEzWD3XidPiaz6rZhX8QftBdSgueuRLNcboaIcOHl37vwLan5iYIsfDOdghXBHJkmRm63a2oxi5Nt-hezEIuQu3GERMtNVUy7Prs4p_D63D-3s6og19PF=s400"/></a></div>
1. finally exit the editor and hit next

### Fixing network access issue in Windows 11

When you first time boot into the OS , you'll notice that your internet does not work in Windows11. so this is how you fix it and you would do is

1.  go down the search and type `cmd` , and run cmd with `Administrator`
1.  type

```
bcdedit /debug on
bcdedit /dbgsettings net hostip:10.0.0.1 port:55555
```

  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEgg6_rVprkyewCPR0ZLbbg363CR4tdYGhBV_GCxhZVGV7WjXb6nuINFUZO44vIOiZf5W6RJRAQyQRr352-jDCV8YswdCP0rxzjPUgx8vS7vFO4xoppOblItC1vn9bMI478jEcOWeEejtjN-jd8iAFL2cCsIi-UIRbR66bsC2_6sZx1GfDMPm7T7e_HM=s1176" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="400" data-original-height="480" data-original-width="1176" src="https://blogger.googleusercontent.com/img/a/AVvXsEgg6_rVprkyewCPR0ZLbbg363CR4tdYGhBV_GCxhZVGV7WjXb6nuINFUZO44vIOiZf5W6RJRAQyQRr352-jDCV8YswdCP0rxzjPUgx8vS7vFO4xoppOblItC1vn9bMI478jEcOWeEejtjN-jd8iAFL2cCsIi-UIRbR66bsC2_6sZx1GfDMPm7T7e_HM=s400"/></a></div>

You'll see the key show up right there you'll know you're good to go. restart your virtual machine and when it boots back up you should the internet access.
