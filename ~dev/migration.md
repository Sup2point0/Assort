# Migrating Windows Laptops
<!-- #SQUARK live! dev!
| dest = dev/migrating
| desc = Transferring 100 GB of files from an outdated old Windows laptop to a new one
| capt = A Tale of Triumph in Persistence
| style = dev
| index = dev
| shard = #INDEX / resources / stories
| date = 2024 October
-->

I finally upgraded my laptop recently.

I’ve used a Dell Latitude E7450 since about 2016, and while it’s not the most capable,[^capable] it has been lovely. The keyboard is perfect in layout, and the trackpad with separate buttons is really nice for 2-hand navigation. Aside from blackscreening issues that resurface every few months, and pretty concerning thermal instability, this laptop’s fulfilled my needs just fine.[^fulfil-needs] In fact, I’d be happy continuing to use it for a little longer ...if not for its rapidly degrading battery life. Oh, and also, it can’t seem connect to WiFi if it’s more than an arm’s length away from the router. Yeah, that’s a bit of an issue. Just a bit.

[^capable]: 5th Intel i5, 8 GB RAM, 256 GB storage, 1080p60 LCD screen.
[^fulfil-needs]: If anything, I’ve been seriously impressed. This thing ran games on an Android emulator at pretty solid 24~30 FPS! With those specs??

Anyway, with a new laptop all set up there was 1 final, dreaded challenge: transferring all of my files from my old laptop the new one. Oh boy.


<br>


## Postmortem

### Game Plan
The goal was to transfer all of my local files on the old laptop to the new one. This totalled just under 100 GB, altho that dropped significantly if you excluded software development projects (Unity projects are LARGE). Not exactly the kind of thing you can solve by mailing a couple of attachments.

Importantly, I wanted all metadata to be preserved – specifically creation date, since I didn’t want to lose the 7 or so years of history embedded into that file system. Now this, was a nontrivial challenge.

### Predicament Analysis
The old laptop was running Windows 10 Enterprise ~. This is a pretty outdated version, since I think I stopped updating Windows some point before... 2020?? The new laptop was freshly ordered, with Windows 11. Both laptops had local accounts,[^local-accounts] so backing up wasn’t really an option.

[^local-accounts]: ew, Microsoft.

### Don’t Burnout
In the past I had used USB cables to transfer photos from my iPhone and iPad to my laptop, which worked perfectly well. You could simply access the filesystem of the device, and ctrl+CV stuff over. I was kinda hoping I could do the same between 2 laptops.

Spoiler: you can’t. Also, it’s really dangerous, you could fry something. I really hope I didn’t. (everything seems fine so far...)

So, I knew I was in for some expeditions into the archives of reddit, Stack Exchange, and the dreaded Microsoft Support.

### Over the Clouds
I did have 1 TB of OneDrive storage space from my school’s Office/Microsoft 365 subscription – of which I had used less than 1 GB. Well, that could work! What I did *not* expect is crashing Chrome when trying to upload the folders to OneDrive online. Upon retrying with smaller folders at a time, I quickly realised I appeared to have jammed the house's WiFi by using up all our bandwidth. I found myself in a pretty hilarious situation of having to use my phone’s mobile data hotspot to research other solutions on my iPad, while the laptop was doing its thing.

Why still researching if OneDrive was already working? Well, it’d totally escaped my mind that uploading stuff to OneDrive gives it a new Date Created – and of course it does, it’s creating a new file *in the OneDrive*! So all my precious metadata was being lost ;-; Unacceptable, unfortunately.

But, you can also access OneDrive via File Explorer if you’re signed in locally. This is good, because then you can move files around directly on the local system without losing any metadata. And indeed I was signed in! Only it was my mum’s work OneDrive, not mine (this laptop was handed down to me from her). It turns out you can only sign into 1 OneDrive locally per device.[^one-onedrive] So the only way for me to access OneDrive on my old laptop was through the website. Go figure.

[^one-onedrive]: This is pretty stupid, tbh.

### Share the Love
AirDrop works so damn well between iOS devices. Wouldn’t it be great if something similar existed for Windows computers?

It does, and I had no clue. You can share folders with other devices connected to your local network through *network sharing*. It’s actually pretty cool. They just have to find your device in **Network** in File Explorer, and then they have access to the folders you’ve chosen to share. You can even configure permissions and protection, so there’s quite a bit of thought that went into this.

This sounded almost too good to be true. So of course, I should’ve expected that my 2 laptops totally could not find each other on the network. They could all see our router, the printer, even the Chromecast we hadn’t used in years. But not each other.

It was time to go down the YouTube rabbit hole. I found [this<sup>↗</sup>](~) very detailed walkthrough on how to get network sharing up and running.[^video] Naturally, things still did not work after following all those steps. We managed to get a remarkable **An extended error has occurred.** error, which was fun.

[^video]: This link might break in future.

Back to the Microsoft Support threads it was, and after trying every single thing in the responses, enabling every service and setting related to local network sharing... it worked.

Yo, it actually worked. The laptops could see each other!

Or more specifically, the old one could see and access the new one. The new one still gave errors when trying to access the old one. Cuz why not.

### Can’t Copy


<br>


## Autopsy

For anyone in the same boat, here are all the steps I took in complete detail to get it working.

### Endpoint
With File Explorer open on both computers, go to the **Network** tab/folder (it should be towards the bottom in the left navigation pane). Make sure you know the names of both of your devices. We’re looking for 1 of them to be able to *see* the other device listed, like so:

![Envious-Spectre and Final-Legacy in network devices]()

But this probably won’t work immediately. Keep checking as you execute the diagnosis!

### Non-Threatening Surgery
You’ll want to carry out all of the following for **both** computers:

- Enable network sharing features.
  - Go to **Control Panel** » **Network & Sharing Centre**.
  - 
- Enable network sharing services.
  - Go to **Services**.
    - Search » Services » Run as Administrator (if applicable) *or*
    - win+R » `services.msc`
  - For each of the following, if its Status is not `Running`, right-click it and select **Start**.
    - `
  - If it’s greyed out, it’s probably because you don’t have admin privileges. Make sure to run Services as Administrator.

Then, we create a shared folder on 1 of the laptops.

- Select the folder you’re sharing.
- Right click » **Properties**

Also, I carried out some command line shenanigans. I’m unclear if they were necessary, but if things aren’t working go ahead an try them.

- Open **Windows Powershell** as Administrator.
- Check the network type.

```bash
Get-Connection
```

### System Link
If all’s good, 1 of the computers can now access the other’s shared folders. All that remains is to put the files from the old computer into that shared folder to be transferred over.

We use the inbuilt Windows **robocopy** command to copy the files. For instance, if I had a `C:/Users/sup/Desktop/projects/` folder I wanted to duplicate over, I did:

```bash
C:Users\sup > cd Desktop\projects

robocopy projects _projects /e
```

Now I had a new folder under `Desktop/` called `_projects/`, with identical metadata to the original `projects/`. ctrl+X to cut, ctrl+V into the shared folder. Then I could go to the shared folder through the new laptop, and ctrl+XV the files to their new home.


<br>


## Concluding Remarks

What an ordeal. We got there in the end, we got there in the end. In all honesty, I’m pretty chuffed I managed to get that working. All things considered, it was pretty seamless.

Yeah, Windows is crazy convoluted, it’s just what happens when your software has evolved over so many years I guess.

This also made me appreciate the power of Git/GitHub so much, because I don’t need to worry about my dev files – all I need to do is clone them from GitHub on the new laptop, and all the editing history I care about it stored in the Git repo. Of course, version control for all files on your system isn’t exactly viable (and MASSIVELY inflates your storage usage).

Let’s hope this new laptop can last me 5 solid years!


<br>
