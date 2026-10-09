# Jobs.ch Scraper - Swiss Job Listings API

Scrape job listings from jobs.ch, Switzerland's largest job board: full descriptions, company, address, workload (Pensum), skills, languages and apply links. Filter by keyword, location and date. New-jobs-only mode for job alerts.

**[Run it on Apify Store](https://apify.com/kamerozkan/jobs-ch-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/jobs-ch-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/jobs-ch-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/jobs-ch-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "searchTerms": [
    "Software Engineer"
  ],
  "location": "Zürich",
  "maxItems": 20
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "jobId": "a01a3063-421f-48b9-95ba-f1d94dc40262",
    "title": "Dipl. Pflegefachfrau HF 20-40%, flexibel arbeiten im Pool, Schönheitsklinik Luzern & Zürich",
    "company": "Lucerne Clinic AG",
    "companyVisible": true,
    "companyId": "fa041d54-35e8-4651-b311-f477648efe46",
    "companyType": "SME",
    "place": "Zürich",
    "street": "Kreuzbühlstrasse 1 (Bahnhof Stadelhofen)",
    "postalCode": "8001",
    "city": "Zürich",
    "canton": "ZH",
    "country": "CH",
    "latitude": 47.37679,
    "longitude": 8.5412,
    "workloadMinPercent": 20,
    "workloadMaxPercent": 40,
    "languages": [
      {
        "language": "de",
        "level": 4
      },
      {
        "language": "en",
        "level": 1
      }
    ],
    "skills": [],
    "applicationMethod": "application_url",
    "quickApply": false,
    "externalUrl": "https://join.com/companies/lucerneclinicch/16737591?utm_medium=social_sharing&utm_source=copy_link",
    "url": "https://www.jobs.ch/de/stellenangebote/detail/a01a3063-421f-48b9-95ba-f1d94dc40262/",
    "publishedAt": "2026-10-07T17:15:43+02:00",
    "firstPublishedAt": "2026-10-07T15:15:43+00:00",
    "expiresAt": "2026-12-06",
    "logoUrl": "https://media.jobs.ch/media/56ddc857-1b8e-42a6-917d-1c963dea39ed",
    "preview": "Dipl. Pflegefachfrau HF 20-40%, flexibel arbeiten im Pool, Schönheitsklinik Luzern & Zürich\nDie Lucerne Clinic zählt zu den führenden ...",
    "description": "Die Lucerne Clinic zählt zu den führenden Schönheitskliniken der Schweiz und steht für höchste Kompetenz in ästhetischer Chirurgie sowie modernsten medizinisch-ästhetischen Behandlungen. Im Zentrum unserer täglichen Arbeit stehen die Glücksgefühle und das Wohlbefinden unserer Patienten.\nFür unseren Pflegepool suchen wir flexible, engagierte und verantwortungsbewusste Persönlichkeiten, die Freude daran haben, unser Pflegeteam je nach Bedarf an unseren beiden Standorten in Luzern und Zürich zu unterstützen.\nAls Dipl. Pflegefachfrau HF im Pool erwartet Sie eine abwechslungsreiche Tätigkeit mit unterschiedlichen Einsätzen und die Möglichkeit, Ihre fachlichen und persönlichen Stärken gezielt einzubringen. Sie schätzen ein dynamisches Umfeld, arbeiten gerne selbstständig und flexibel und behalten auch in unterschiedlichen Situationen den Überblick?\nWir suchen nach Vereinbarung:\nDipl. Pflegefachfrau HF 20-40%, flexibel arbeiten im Pool, Schönheitsklinik Luzern & Zürich\n\nIhre Aufgaben:\nPrä- und Postoperative Betreuung von ästhetischen Patienten\nAusführen von ärztlichen Verordnungen\nPostoperative Beratung/Aufklärung\nPflegedokumentation führen\nEnge Zusammenarbeit mit dem Basisteam\n\nIhre Qualifikationen:\nAbgeschlossene Ausbildung zur Dipl. Pflegefachfrau HF\nFundierte Berufserfahrung im Akutspital\nSpeditive, exakte und verantwortungsvolle Arbeitsweise\nEmpathische, fröhliche Persönlichkeit mit hoher Sozialkompetenz\nGepflegtes Erscheinungsbild\nNichtraucher(-in)\n\nIhr Gewinn:\nAbwechslungsreiche Arbeit mit viel Eigenverantwortu
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/jobs-ch-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
