# Round 1: Homepage layout + hackathon callout + mobile fixes

Cross-referencing both audits with your layout brief, this round is layout only. Your wording, numbers and dates stay exactly as they are. Rewriting copy and checking claims moves to Round 2.

## 1. New homepage order (from your layout brief)
1. Top section: your current headline, intro and photo, with the impact numbers in one compact row underneath. The numbers count up once, and stay still for visitors who prefer less motion.
2. Company logos strip in grayscale, with less space around it.
3. **Selected work**: exactly three equal cards. Partner activation (SWEEP), SEC filings onboarding (Proxymity) and Biometrio growth strategy (ESCP). Each card keeps its existing title, description and link. An "All work" link sits beside the heading.
4. **Journey**: experience on the left (70%), education on the right (30%). It has a "View CV" button.
   - Five roles, newest first: Proxymity, SWEEP, Transdev, L'Oréal, General Electric. All start closed with a "+". Click or press Enter to open one, and only one opens at a time.
   - GE looks the same as the other roles, with no separate featured block.
   - Education: ESCP, then SRM, with their current details.
   - On phones the two columns stack: roles first, then education.
5. **One recommendation**, shown compact with its original quote, name and role.
6. **Small footer**: your name and London, plus Email, LinkedIn and CV.
- Removed from the homepage but kept: the Skills cards and scrolling tools list. Their content stays in the project and is not deleted.
- Top menu: Home, Work, Journey.
- On a laptop (1280×800 and 1440×900), the Selected work heading and the tops of its cards show without scrolling.

## 2. New "Work" page
- One page listing every case study and project: Market Compass, partner intelligence, Trading Platform UI Testing, the AP scraping agent marked "in progress", and the three selected ones.
- All existing case-study and project links keep working.

## 3. Hackathon callout (your request)
- A small "Hackathon winner" label with a trophy icon under your photo, as in the reference. It links to the FinanceFlow app in a new tab.
- It shows a short tooltip/caption: "Company Brain Buildathon — Finance & Ops track, judged by Round Treasury."

## 4. Mobile repairs (top P0 in both audits)
- Fix the sideways scrolling on phones (320–430px).
- Shrink the oversized case-study titles on phones. Make code blocks scroll within their own box.
- Add a "Back to case studies" link at the top of the partner activation and partner intelligence pages, matching the SEC page.

## Needed from you
- **Your CV as a PDF.** The site doesn't have one yet. Until you upload it, the CV buttons stay hidden. I won't create one.

## Deferred to Round 2 (from the audits, not in this pass)
- New headline and positioning, plus updated page title and description.
- Checking each impact number (measured or estimated), the $14K / adoption wording, and SQL vs SOQL.
- "At a glance" ownership boxes on each case study, and a closing "Discuss a role" block.
- Market Compass written commentary. The dashboard's own mobile layout is a separate app.
- Experience contributions and logo context labels.

## Technical details
- New `/work` route (`src/pages/Work.tsx`) reusing the existing case-study and project data. `publishedStudies` stays the single source of case-study links. The old `/#case-studies` and `/#projects` hash links redirect to `/work`.
- `ExperienceSection` gets rebuilt as a Journey grid (`minmax(0,7fr) minmax(0,3fr)`, gap of about 36px) using the shadcn Accordion (type single, collapsible). Its data entries stay unchanged and are split by type.
- `HeroSection`: compact metric row with a count-up controlled by `prefers-reduced-motion`. Hero padding is about 14/10px, the logo strip about 6/8px, and the gap above Selected work 16px.
- Navigation and Footer get simplified, and RouteScroll handles `/#journey`.
- After the PDF is uploaded, the CV is hosted as a Lovable asset.
- Checked at 360, 390, 768, 1280×800 and 1440×900. The checks cover horizontal overflow and keyboard use of the accordion.
