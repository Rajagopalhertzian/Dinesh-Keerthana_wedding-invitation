// ============================================================
// All wedding-specific content lives here.
// Every component reads from this file instead of hardcoding
// text, so the same project can be reused for another wedding
// just by editing this one file (plus the photos folder).
// ============================================================

const weddingData = {
  invocation: {
    tamilHeading: 'திருமணம் அழைப்பிதழ்',
    kuralText: 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை\nபண்பும் பயனும் அது.',
    kuralAttribution: '— திருக்குறள் 45',
    blessing:
      "தங்களை அன்புடன் வரவேற்கிறோம்",
  },

  couple: {
    brideName: 'Keerthana',
    groomName: 'Dinesh',
    brideParents: 'D/o Mr. Chandiran\nMrs. Panjavarnam',
    groomParents: 'S/o Mrs. Karuppiah \n Mrs. Rajeswari\nBrother. Mahesh',
  },

  wedding: {
    isoDate: '2026-11-13T09:00:00', // used by the countdown — keep in ISO format
    displayDate: 'Friday, 13 November 2026',
    time: '9:00 AM', // wedding time
    startTime: '9:00 AM', // shown as "FROM 9:00 AM ONWARDS"
    tagline: 'A new chapter, woven with two hearts and the blessings of family',
    venueName: 'Shanmuga Mahal',
    venueAddress: 'Peraiyur',
    mapUrl:
      'https://maps.app.goo.gl/WajUCgAs6gMmTABh6',
  },

  reception: {
    isoDate: '2026-11-13T09:00:00',
    displayDate: 'Friday, 13 November 2026',
    startTime: '9:00 AM', // shown as "FROM 9:00 AM ONWARDS"
    schedule: [],
    venueName: 'Shanmuga Mahal',
    venueAddress: 'Peraiyur',
    mapUrl:
      'https://maps.app.goo.gl/WajUCgAs6gMmTABh6',
  },

  rsvp: {
    whatsappNumber: '919952745836', // include country code, digits only
    message: "We're delighted to accept the invitation for Dinesh & Keerthana's wedding!",
  },

  // Each entry becomes one card in the "Our Story" section
  story: [
    { year: '2018', text: 'We met as college classmates.' },
    { year: '2020', text: 'Friendship quietly became something more.' },
    { year: '2024', text: 'Our families met, and it felt like coming home.' },
    { year: '2025', text: 'He asked, she said yes — surrounded by loved ones.' },
    { year: '2026', text: 'And now, two hearts begin one beautiful journey.' },
  ],

  // Filenames only — actual files live in src/assets/photos/thumb and /full
  gallery: [
    { file: 'photo-01.webp', caption: 'A precious moment' },
    { file: 'photo-02.webp', caption: 'Togetherness' },
    { file: 'photo-03.webp', caption: 'Engagement' },
  ],

  timeline: [
    { time: '4:30 – 6:30 AM', label: 'Muhurtham' },
  ],
}

export default weddingData
