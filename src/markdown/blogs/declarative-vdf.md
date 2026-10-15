---
title: Declarative Non Steam Games with Nix
draft: true
banner: /dwa.png
description: Declare Non Steam Games with the power of NixOS and Home Manager
date: 2023-02-02
---

# Declarative Non Steam Games with NixOS and Home Manager

> All of the things that are described in this article are the result of the following nix flake https://github.com/quirinecker/nix-vdf

Non-Steam games is a feature of steam, where you can register applications as non-steam games and they will show
up in the steam library. This can be useful when you have games on different launchers but want to open them through
a single library, which is especially useful when you take steam's Big Picture Mode into account.

The only drawback of those non steam games is, that when you want to reinstall the OS, all of your added games are gone.
This problem can be tackled by either backing up the corresponding configuration or by declaring the config yourself.
As my operating of choice is NixOS, I chose the latter. If yours is not, I would recommend that you still read through
this article, especially the beginning, as it will explain how non steam games are stored in general.

The article is split into ...

## Where are Non Steam Games defined?

This article only focueses linux like operating systems here, but might be in a similar location on windows and MacOS.
In my case, the location of them was in `~/.local/share/Steam/userdata/{steam32 user id}/config/shortcuts.vdf`.
The only question is, what the actual user id is. There are multiple ways to determine it, the easiest one being,
opening the folder `~/.local/share/Steam/userdate/` and inspecting which folders are present. If it is only one,
meaning only one user logged in on this device so far, the user id is pretty obvious. Otherwise, you would
need to inspect the configuration files in the specific userdata folders. Alternatively there are other ways to
determine the user id. Those can be found in the README of https://github.com/quirinecker/nix-vdf.

After determining the correct user id and `shortcuts.vdf` file, the first instinct would be to read it with something
like `cat shortcuts.vdf`. However, the shortcuts.vdf file is binary encoded and hard to read. More on that in the
next section.


## The vdf format

The valve data format (abbreviated by vdf) is a json like format that is used by steam configuration files.
While this format is in some cases plain text, it is not plain text in case of the non steam games configuration.
Instead, it is encoded in a binary format. Furthermore, it is not exactly json and requires some additional
transformations to go from nix to vdf. Granted, if the target configuration would not be nix, a binary encoding would
be the only hurdle. For my case however, I required both. Luckily, there is already a python library that was capable
of both (https://github.com/ValvePython/vdf).


## The structure of shortcuts.vdf

After looking at the decoded shortcuts vdf file, one can see a structure like this (in json format):

```json
{
	"shortcuts": {
		"0": {
		  "appid": ...,
          "AppName": "...",
          "Exe": "...",
          "StartDir": "...",
          "icon": "...",
          "ShortcutPath": "...",
          "LaunchOptions": "...",
          "IsHidden": ...,
          "AllowDesktopConfig": ...,
          "AllowOverlay": ...,
          "OpenVR": ...,
          "Devkit": ...,
          "DevkitGameID": "...",
          "DevkitOverrideAppID": ...,
          "LastPlayTime": ...,
          "FlatpakAppID": "...",
          "sortas": "...",
          "tags": { },
		}
	}

}
```

A lot of these might already be familiar to someone that has setup a non steam game through the gui. Others might
be totally new because steam usually sets them automatically. I would recommend to copy the values from your existing
`shortcuts.vdf` file by decoding it, because most values are probably not that important for most people.
I copied for my setup one non steam game manually and copied that config everytime I watned to add a new game.
The only thing i needed  to change was `icon`, `appid` and `Exe`. Of course, your setup can be different.

