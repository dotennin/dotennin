---
title: Switch on back the wifi for raspberrypi
date: 2020-05-17 22:34:29
tags:
  - RaspberryPI
  - Linux
  - Ubuntu
---

<br />
sudo vim /etc/network/interfaces<br />
<br />
add the following contents<br />
<br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">auto wlan0</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">iface wlan0 inet manual</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">iface default inet dhcp</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">iface aoakley-home inet static</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">address 192.168.11.21</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">netmask 255.255.255.0</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">network 192.168.11.0</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">broadcast 192.168.11.255</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">gateway 192.168.11.1</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;">dns-nameservers 192.168.11.1</span><br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;"><br /></span>
<br />
and then execute<br />
<span style="background-color: #e0e0ff; font-family: monospace; font-size: 16px; font-weight: 700;"><br /></span>
<span style="background-color: #e4e6e8; color: #242729; font-family: &quot;consolas&quot; , &quot;menlo&quot; , &quot;monaco&quot; , &quot;lucida console&quot; , &quot;liberation mono&quot; , &quot;dejavu sans mono&quot; , &quot;bitstream vera sans mono&quot; , &quot;courier new&quot; , monospace , sans-serif; font-size: 13px; white-space: pre-wrap;">sudo rfkill unblock wifi </span><br />
<span style="background-color: #e4e6e8; color: #242729; font-family: &quot;consolas&quot; , &quot;menlo&quot; , &quot;monaco&quot; , &quot;lucida console&quot; , &quot;liberation mono&quot; , &quot;dejavu sans mono&quot; , &quot;bitstream vera sans mono&quot; , &quot;courier new&quot; , monospace , sans-serif; font-size: 13px; white-space: pre-wrap;">sudo iwconfig wlan0 txpower on </span><br />
<span style="background-color: #e4e6e8; color: #242729; font-family: &quot;consolas&quot; , &quot;menlo&quot; , &quot;monaco&quot; , &quot;lucida console&quot; , &quot;liberation mono&quot; , &quot;dejavu sans mono&quot; , &quot;bitstream vera sans mono&quot; , &quot;courier new&quot; , monospace , sans-serif; font-size: 13px; white-space: pre-wrap;">sudo shutdown -r now</span><br />
<br />
refer to :&nbsp;<a href="http://www.aoakley.com/articles/2013-07-31-raspberry-pi-networking.php">http://www.aoakley.com/articles/2013-07-31-raspberry-pi-networking.php</a><br />
<span style="background-color: #e4e6e8; color: #242729; font-family: &quot;consolas&quot; , &quot;menlo&quot; , &quot;monaco&quot; , &quot;lucida console&quot; , &quot;liberation mono&quot; , &quot;dejavu sans mono&quot; , &quot;bitstream vera sans mono&quot; , &quot;courier new&quot; , monospace , sans-serif; font-size: 13px; white-space: pre-wrap;"><br /></span>
