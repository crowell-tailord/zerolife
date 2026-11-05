// The site's pages, TEMPORARILY as the machine's file directory (Oct 25 2026, user: map out every page a clothing line
// needs, in the site's look, until each one moves to its object in the 3D room). Drawn by js/room-pages.js.
// EVERYTHING here is PLACEHOLDER copy for the user (and Jesse) to replace: [ TBC ] marks facts nobody has decided yet.
// Legal pages are headings only: their text must come from Shopify's policy templates or a lawyer, never made up here.
//
// root.folders: the directory. Each file: n (its number), file (its name), label (plain words: what it is), size,
//   page (opens that page) | run: 'collection' (opens the collection) | locked: 'why' (shown, not clickable).
// pages[id]: file (the header line), title, human (true = the HUMAN register: serif, bone), blocks:
//   { h: 'heading' }  { p: 'machine text' }  { s: 'serif text (human)' }  { kv: [[label, value], ...] }
//   { qa: [[question, answer], ...] }  { note: 'small grey line' }  { table: [[head...], [row...], ...] }
window.ZL_SITE = {
    root: {
        title: 'ZERØLIFE://ROOT',
        status: '15 FILES // 2 CORRUPTED // LAST WRITE: NEVER',
        folders: [
            { name: 'SUBJECTS/', what: 'THE GARMENTS', files: [
                { n: '01', file: 'COLLECTION.EXE', label: 'SHOP', size: '02 SUBJ', run: 'collection' },
                { n: '02', file: 'ARCHIVE/', label: 'PAST DROPS', size: '--', locked: 'NOTHING HAS BEEN LOST YET' }
            ] },
            { name: 'MEMORY/', what: 'WHO WE ARE', files: [
                { n: '03', file: 'LOG_000.TXT', label: 'ABOUT', size: '0.6KB', page: 'about' },
                { n: '04', file: 'LOOKBOOK/', label: 'IMAGES', size: '--', locked: 'NOT YET RECOVERED' }
            ] },
            { name: 'PROTOCOLS/', what: 'HOW IT WORKS', files: [
                { n: '05', file: 'SIZE_GUIDE.DAT', label: 'SIZES', size: '1.2KB', page: 'size' },
                { n: '06', file: 'SHIPPING.TXT', label: 'SHIPPING', size: '2.1KB', page: 'shipping' },
                { n: '07', file: 'RETURNS.TXT', label: 'RETURNS', size: '1.8KB', page: 'returns' },
                { n: '08', file: 'CARE.TXT', label: 'GARMENT CARE', size: '0.4KB', page: 'care' },
                { n: '09', file: 'FAQ.TXT', label: 'QUESTIONS', size: '1.5KB', page: 'faq' }
            ] },
            { name: 'TRANSMIT/', what: 'REACH US', files: [
                { n: '10', file: 'CONTACT.SYS', label: 'CONTACT', size: '0.3KB', page: 'contact' },
                { n: '11', file: 'SIGNAL.SYS', label: 'NEWSLETTER', size: '0.2KB', page: 'signal' }
            ] },
            { name: 'TERMS/', what: 'THE SMALL PRINT', files: [
                { n: '12', file: 'TERMS.TXT', label: 'TERMS OF SERVICE', size: '--', page: 'terms' },
                { n: '13', file: 'PRIVACY.TXT', label: 'PRIVACY POLICY', size: '--', page: 'privacy' },
                { n: '14', file: 'REFUNDS.TXT', label: 'REFUND POLICY', size: '--', page: 'refunds' },
                { n: '15', file: 'COOKIES.TXT', label: 'COOKIES', size: '--', page: 'cookies' }
            ] }
        ]
    },
    pages: {
        about: {
            file: 'FILE 03 // LOG_000.TXT // FOUND ON THE FLOOR // AUTHOR: UNKNOWN', title: 'the human is the glitch.', human: true,
            blocks: [
                { note: '[ DRAFT LORE: PLACEHOLDER, REWRITE IN YOUR OWN WORDS ]' },
                { s: 'Somewhere between the bytes there is a room. Nothing in it moves unless someone looks at it.' },
                { s: 'The ones left inside stand very still, greyed out, waiting to be picked. When you choose one, it remembers it had a body.' },
                { s: 'ZERØLIFE makes the clothes they were wearing when the machine stopped.' },
                { s: 'We don’t sell outfits. We recover them.' },
                { note: 'END OF LOG // THE REST IS CORRUPTED' }
            ]
        },
        size: {
            file: 'FILE 05 // SIZE_GUIDE.DAT // INTEGRITY 61%', title: 'SIZE GUIDE',
            blocks: [
                { note: '[ PLACEHOLDER: REAL MEASUREMENTS COME FROM THE CLO PATTERNS ]' },
                { h: 'TEE // BOXY, DROPPED SHOULDER' },
                { table: [['SIZE', 'CHEST', 'LENGTH', 'SLEEVE'], ['S', '-- CM', '-- CM', '-- CM'], ['M', '-- CM', '-- CM', '-- CM'], ['L', '-- CM', '-- CM', '-- CM'], ['XL', '-- CM', '-- CM', '-- CM']] },
                { h: 'HOODIE // OVERSIZED, DROPPED SHOULDER' },
                { table: [['SIZE', 'CHEST', 'LENGTH', 'SLEEVE'], ['S', '-- CM', '-- CM', '-- CM'], ['M', '-- CM', '-- CM', '-- CM'], ['L', '-- CM', '-- CM', '-- CM'], ['XL', '-- CM', '-- CM', '-- CM']] },
                { h: 'HOW TO MEASURE' },
                { kv: [['CHEST', 'ARMPIT TO ARMPIT, LAID FLAT'], ['LENGTH', 'HIGHEST POINT OF THE SHOULDER TO THE HEM'], ['SLEEVE', 'SHOULDER SEAM TO THE CUFF']] },
                { p: 'BETWEEN SIZES: TAKE YOUR USUAL SIZE FOR THE INTENDED FIT, ONE DOWN FOR CLOSER.' }
            ]
        },
        shipping: {
            file: 'FILE 06 // SHIPPING.TXT // INTEGRITY 88%', title: 'SHIPPING',
            blocks: [
                { note: '[ PLACEHOLDER: EVERY [ TBC ] NEEDS A DECISION ]' },
                { kv: [['PROCESSING', '[ TBC ] WORKING DAYS BEFORE IT LEAVES US'], ['DOMESTIC', '[ TBC ] DAYS // [ TBC ] COST'], ['INTERNATIONAL', '[ TBC ] DAYS // [ TBC ] COST'], ['FREE SHIPPING', 'OVER [ TBC ]'], ['TRACKING', 'SENT BY EMAIL ONCE IT SHIPS'], ['DUTIES + TAXES', '[ TBC ]: WHO PAYS THEM OUTSIDE THE [ TBC ]']] },
                { h: 'LOST IN TRANSIT' },
                { p: 'IF NOTHING HAS MOVED FOR [ TBC ] DAYS, CONTACT US WITH YOUR ORDER NUMBER.' }
            ]
        },
        returns: {
            file: 'FILE 07 // RETURNS.TXT // INTEGRITY 93%', title: 'RETURNS + EXCHANGES',
            blocks: [
                { note: '[ PLACEHOLDER: MUST MATCH THE REFUND POLICY IN TERMS/ ]' },
                { kv: [['WINDOW', '[ TBC ] DAYS FROM DELIVERY'], ['CONDITION', 'UNWORN, UNWASHED, TAGS ON'], ['EXCHANGES', 'ONE SIZE SWAP PER ORDER [ TBC ]'], ['FINAL SALE', '[ TBC ]: E.G. SAMPLES, ARCHIVE PIECES'], ['RETURN POSTAGE', '[ TBC ]'], ['REFUND', 'TO THE ORIGINAL PAYMENT, [ TBC ] DAYS AFTER IT ARRIVES']] },
                { h: 'TO START A RETURN' },
                { p: 'WRITE TO US FROM TRANSMIT/CONTACT.SYS WITH YOUR ORDER NUMBER AND WHAT YOU WANT TO DO.' }
            ]
        },
        care: {
            file: 'FILE 08 // CARE.TXT // INTEGRITY 100%', title: 'GARMENT CARE',
            blocks: [
                { kv: [['WASH', 'COLD, INSIDE OUT'], ['DRY', 'HANG DRY. DO NOT TUMBLE DRY'], ['IRON', 'INSIDE OUT, LOW. NEVER ON THE PRINT'], ['BLEACH', 'NO'], ['DRY CLEAN', 'NO']] },
                { p: 'THE PRINTS ARE INK ON COTTON. TREAT THEM LIKE SOMETHING YOU WANT TO KEEP.' }
            ]
        },
        faq: {
            file: 'FILE 09 // FAQ.TXT // INTEGRITY 74%', title: 'QUESTIONS',
            blocks: [
                { note: '[ PLACEHOLDER ANSWERS ]' },
                { qa: [
                    ['WHEN IS THE NEXT DROP?', 'JOIN TRANSMIT/SIGNAL.SYS. YOU WILL HEAR BEFORE ANYONE ELSE.'],
                    ['DO YOU RESTOCK?', '[ TBC ]'],
                    ['HOW DO SIZES RUN?', 'BOXY AND OVERSIZED BY DESIGN. SEE PROTOCOLS/SIZE_GUIDE.DAT.'],
                    ['WHERE DO YOU SHIP?', 'SEE PROTOCOLS/SHIPPING.TXT.'],
                    ['CAN I CHANGE MY ORDER?', 'WITHIN [ TBC ] HOURS, BEFORE IT SHIPS. WRITE TO US.'],
                    ['WHERE ARE YOU BASED?', '[ TBC ]']
                ] }
            ]
        },
        contact: {
            file: 'FILE 10 // CONTACT.SYS // CHANNEL OPEN', title: 'CONTACT',
            blocks: [
                { note: '[ PLACEHOLDER ADDRESSES ]' },
                { kv: [['ORDERS', '[ EMAIL TBC ]'], ['PRESS + COLLABS', '[ EMAIL TBC ]'], ['INSTAGRAM', '[ HANDLE TBC ]'], ['REPLIES', 'WITHIN [ TBC ] WORKING DAYS']] },
                { p: 'FOR AN ORDER, ALWAYS INCLUDE YOUR ORDER NUMBER.' }
            ]
        },
        signal: {
            file: 'FILE 11 // SIGNAL.SYS // LISTENING', title: 'NEWSLETTER',
            blocks: [
                { s: 'Leave a frequency. We will reach you before each drop, and never otherwise.' },
                { note: '[ THE SIGN-UP CONNECTS TO SHOPIFY LATER ]' }
            ]
        },
        terms: {
            file: 'FILE 12 // TERMS.TXT // NOT YET WRITTEN', title: 'TERMS OF SERVICE',
            blocks: [
                { note: '[ DO NOT WRITE THIS BY HAND: SHOPIFY ADMIN > SETTINGS > POLICIES HAS A TEMPLATE, OR ASK A LAWYER ]' },
                { h: 'USUAL SECTIONS' },
                { p: 'OVERVIEW // ONLINE STORE TERMS // PRODUCTS + PRICES // ORDERS + BILLING // THIRD-PARTY TOOLS // USER CONTENT // ERRORS // PROHIBITED USES // LIABILITY // GOVERNING LAW // CHANGES // CONTACT' }
            ]
        },
        privacy: {
            file: 'FILE 13 // PRIVACY.TXT // NOT YET WRITTEN', title: 'PRIVACY POLICY',
            blocks: [
                { note: '[ DO NOT WRITE THIS BY HAND: SHOPIFY ADMIN > SETTINGS > POLICIES HAS A TEMPLATE, OR ASK A LAWYER ]' },
                { h: 'USUAL SECTIONS' },
                { p: 'WHAT WE COLLECT // HOW WE USE IT // WHO WE SHARE IT WITH // COOKIES // YOUR RIGHTS // HOW LONG WE KEEP IT // CONTACT' }
            ]
        },
        refunds: {
            file: 'FILE 14 // REFUNDS.TXT // NOT YET WRITTEN', title: 'REFUND POLICY',
            blocks: [
                { note: '[ DO NOT WRITE THIS BY HAND: SHOPIFY ADMIN > SETTINGS > POLICIES HAS A TEMPLATE, OR ASK A LAWYER ]' },
                { p: 'MUST MATCH PROTOCOLS/RETURNS.TXT.' }
            ]
        },
        cookies: {
            file: 'FILE 15 // COOKIES.TXT // NOT YET WRITTEN', title: 'COOKIES',
            blocks: [
                { note: '[ DEPENDS ON WHAT THE LIVE SITE USES (SHOPIFY, ANALYTICS): WRITE IT LAST ]' }
            ]
        }
    }
};
