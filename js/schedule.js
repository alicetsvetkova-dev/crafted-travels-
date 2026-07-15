/* ============================================================
   CRAFTED VISIONS — WORKSHOP SCHEDULE (edit this file only)
   ------------------------------------------------------------
   Each workshop repeats weekly on the given weekdays.
   weekday: 0 = Sunday, 1 = Monday … 5 = Friday, 6 = Saturday

   To change the rhythm, times, prices or copy — edit below.
   To cancel a single date, add it to "except" as "YYYY-MM-DD".
   To add a one-off extra date, add it to "extra" as "YYYY-MM-DD".

   BOOKED SPOTS: when a booking confirmation arrives, record it in
   the workshop's "booked" map, e.g.
       booked: { "2026-07-18": 2, "2026-07-25": 1 }
   The calendar then shows "2 of 6 spots booked" for that date.
   When a date reaches maxSpots it shows "Fully booked" and the
   book button is replaced by a waitlist link.
   ============================================================ */

var CV_BOOKING = {
    /* How far ahead people can book, in months */
    monthsAhead: 6,
    /* Online booking closes this many hours before a session starts.
       Past dates and closed sessions update automatically from the
       visitor's current date & time — nothing to maintain here. */
    bookingCutoffHours: 24,
    /* Spots per session */
    maxSpots: 6,
    /* A session takes place from this many participants */
    minSpots: 2,
    /* Stripe checkout — the workshop is chosen at checkout */
    stripeUrl: "https://buy.stripe.com/6oU00l9cY0C66ys8II53O08",
    /* Community rate for Tunisians living & working in Tunisia */
    communityUrl: "https://buy.stripe.com/14AfZj74Q70ug926AA53O09",
    communityLabel: "Tunisian community rate · 39 € / 135 TND",
    /* Where "ask for a different workshop" requests go */
    whatsapp: "4917687361752",
    email: "crafted.visions@outlook.com",

    workshops: [
        {
            id: "ceramics",
            name: "Ceramics Workshop",
            colorClass: "c-ceramics",
            weekdays: [3, 6], /* Wednesday & Saturday */
            start: "10:00",
            end: "13:00",
            price: "49 €",
            image: "images/opt/atelier-poterie.webp",
            desc: "Shape clay with your hands and bring home a piece you made yourself, guided by a master ceramicist.",
            facts: [
                "3 hours · working pottery atelier in Tunis",
                "Small group · max 6 participants",
                "All materials, snacks & drinks included",
                "No experience needed · take home your creation"
            ],
            booked: {},
            except: [],
            extra: []
        },
        {
            id: "bookbinding",
            name: "Bookbinding Workshop",
            colorClass: "c-bookbinding",
            weekdays: [4, 5, 6], /* Thursday, Friday & Saturday */
            start: "15:00",
            end: "18:00",
            price: "49 €",
            image: "images/book-binding.webp",
            desc: "Learn the ancient art of hand-binding from one of the last bookbinders in Tunis. Leave with a book you made yourself.",
            facts: [
                "3 hours · historic atelier in the Medina",
                "Small group · max 6 participants",
                "All materials, snacks & drinks included",
                "No experience needed · take home your creation"
            ],
            booked: {},
            except: [],
            extra: []
        },
        {
            id: "calligraphy",
            name: "Calligraphy Workshop",
            colorClass: "c-calligraphy",
            weekdays: [5, 6, 0], /* Friday, Saturday & Sunday */
            start: "10:00",
            end: "13:00",
            price: "49 €",
            image: "images/calligraphy.webp",
            desc: "Discover the meditative rhythm of Arabic calligraphy in a beautiful creative space.",
            facts: [
                "3 hours · creative space in Tunis",
                "Small group · max 6 participants",
                "All materials, snacks & drinks included",
                "No experience needed · take home your creation"
            ],
            booked: {},
            except: [],
            extra: []
        },
        {
            id: "medina",
            name: "Guided Medina Tour",
            colorClass: "c-medina",
            weekdays: [0], /* Sunday */
            start: "10:00",
            end: "11:30",
            price: "49 €",
            image: "images/opt/medina-gate.jpg",
            desc: "Explore the Medina through the eyes of someone who truly knows it: hidden corners, living craftsmanship, stories off the tourist trail.",
            facts: [
                "1.5 hours · on foot through the Medina of Tunis",
                "Small group · max 6 participants",
                "Hidden ateliers & stories off the tourist trail"
            ],
            booked: {},
            except: [],
            extra: []
        }
    ]
};
