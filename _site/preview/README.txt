Canoe Valley School — website files
====================================

Upload everything in this folder to the web root of canoevalley.org, keeping the folder structure:

  index.html              Home
  about/index.html        About (mission, campus, board, committees, join our team)
  curriculum/index.html   Curriculum (from the Vision Summary handout)  <- new page
  enroll/index.html       Enroll
  vision/index.html       Vision (slideshow of Vision & Invitation to Contribute)
  vision/slides/          20 booklet pages + thumbnails for the slideshow
  donate/index.html       Give
  assets/site.css         Shared styles for every page
  assets/img/             Washed-out background photos, campus plan, building illustration, 1990s class photo
  assets/logo.png, logo-reversed.png, favicon.png, icon-180.png
  files/CV_VisionBook.pdf      Vision & Invitation to Contribute, 10-31 version (linked from Vision and Give)
  files/CV_VisionSummary.pdf   The Vision Summary handout (linked from Curriculum)

Documents are linked from the pages they relate to: the brochure on About; the Vision Summary
and program guide on Curriculum; the full vision PDF on Vision and Give. CV_Brochure.pdf and
CV_ProgramGuide.pdf are already on the server; leave them in place, or remove the links if those
PDFs are retired.

Email sign-up form and volunteer buttons
----------------------------------------
The EmailOctopus sign-up form sits in a "Stay up to date" band just above the footer on every page
(search any page for "EmailOctopus"). It draws itself into the page, so site.css restyles it to use
the site's fonts and buttons (rules starting ".signup-band" and ".eo-slot"). The band's own heading
and sentence replace the form's intro text, so edits to that text in EmailOctopus won't show on the
site; the fields and button still come from EmailOctopus. Use the form's code only once per page.

"Sign up to learn more" (engagement committee), "Ask about joining" (steering committee), and the
volunteer buttons open an email to info@canoevalley.org with a subject line filled in (search the
HTML for "mailto:info@canoevalley.org?subject=").

Fonts — Roca and Proxima Nova
-----------------------------
The site uses the school's typefaces, Roca (headings) and Proxima Nova (body text), from the
Adobe Fonts web project "Canoe Valley website" (project ID qmw2hxd). Every page links to it with:

  <link rel="stylesheet" href="https://use.typekit.net/qmw2hxd.css">

The project includes Roca Light Italic, Bold, and Black, and Proxima Nova Regular, Italic, and
Semibold. It is managed at fonts.adobe.com > My Adobe Fonts > Web Projects, under the Adobe
account that created it. If that account's Creative Cloud plan ends, the site falls back to
Fraunces and Figtree (Google Fonts), which look similar.

Brand colors: maroon #7B1816, orange #DE7D26.

Give Lively donation widget (Give page)
---------------------------------------
The Branded Donation Widget embed code is installed in donate/index.html, between the
"START GIVE LIVELY WIDGET" and "END GIVE LIVELY WIDGET" comments. It loads from Give Lively when
the page is viewed over https, so it will not appear if you open the file directly on your computer.
To replace it later, paste new embed code between those two comments (not inside an iframe).
Give Lively allows one widget per web page.
