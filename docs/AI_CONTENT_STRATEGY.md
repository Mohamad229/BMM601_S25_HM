# AI Content Strategy & Disclosure Plan

**Document Version:** 1.0  
**Created:** April 18, 2026  
**Status:** Planning Phase

---

## Overview

This document defines the strategy for using AI tools in content generation, how AI content is integrated into the website, and how it will be transparently disclosed in the final report and on the website itself.

---

## 1. AI Tool Selection & Strategy

### Required AI Tools by Category

#### A. Text Generation

**Primary Tool:** ChatGPT (OpenAI)

**Use Cases:**

- Content ideation and outlining
- Draft writing for sections
- Script writing for videos
- Email/promotional text samples
- Content refinement suggestions

**Scope:** Initial content drafting only; all outputs reviewed and rewritten

**Not Used For:** Final explanatory text (hand-written for academic integrity)

---

#### B. Image Generation

**Primary Tool:** DALL-E 3 (OpenAI)
**Secondary Options:** Midjourney, Stable Diffusion

**Use Cases:**

- Hero image generation
- Gallery example images
- Concept illustrations
- Application cards visual concepts
- AI output demonstration

**Scope:** Generate 5-10 images; heavily edited and refined

**Quality Requirements:**

- Must be coherent and on-topic
- Professional appearance after editing
- No copyright concerns (AI-generated owns no copyright but reduces risk)

---

#### C. Voice & Narration

**Primary Tool:** ElevenLabs (AI Voice Generation)
**Alternative:** Human recording if preferred

**Use Cases:**

- Video narration for intro video
- Video narration for demo video
- Audio sample demonstrations
- Voiceover for multimedia examples

**Selection Criteria:**

- Professional voice tone
- Clear pronunciation
- No background noise
- Natural pacing

**Scope:** 2-3 minutes of narration total; can be integrated with human voiceover

---

#### D. Video Assets

**Not Generating:** No full AI-generated videos
**Using:** Video editing tools with AI-assisted features

**AI Features Used In:**

- CapCut automatic captions
- Adobe Premiere effects suggestions
- Scene transitions
- Background music recommendations

**Recording Approach:** Screen recordings of actual tools + manual editing

---

### Decision Matrix: What Gets AI vs Manual Treatment

| Content Type         | AI-Generated?      | Manual Editing?     | Final Use?          | Reason                     |
| -------------------- | ------------------ | ------------------- | ------------------- | -------------------------- |
| **Text Sections**    | AI draft           | Heavy rewrite       | 30-40% AI-assisted  | Speed + human accuracy     |
| **Logo**             | Concept (optional) | Designed/refined    | Final design manual | Quality + branding control |
| **Hero Image**       | AI-generated       | Photoshopped        | Gallery example     | Showcase capability        |
| **Gallery Images**   | AI-generated       | Edited/cropped      | Gallery showcase    | Demonstrate outputs        |
| **Process Diagram**  | Manual design      | Enhanced            | Final design        | Clarity requirement        |
| **Tool Icons**       | Design tools       | Final               | Navigation          | Consistency                |
| **Narration**        | ElevenLabs         | None required       | Integrated audio    | Speed + clarity            |
| **Video Production** | Manual + AI-assist | Standard editing    | Final videos        | Quality control            |
| **Captions**         | Auto-generated     | Manual verification | Final captions      | Accuracy critical          |

---

## 2. Content Generation Workflow

### Phase 1: Content Ideation (Using ChatGPT)

**Step 1: Generate Content Outline**

```
PROMPT TO CHATGPT:
"Create a brief educational outline for a website explaining
Generative AI to beginners. Include 8 main sections, each with
3-5 key points to cover. Keep language simple, not technical."

OUTPUT: Structured outline with key points
USAGE: Guide for hand-writing final content
```

**Step 2: Brainstorm Examples**

```
PROMPT:
"Provide 10 real-world examples of how Generative AI is used
in multimedia production (images, audio, video). Include the tool
name and specific use case."

OUTPUT: List of examples
USAGE: Content reference; rewrite selected examples
```

**Step 3: Draft Supporting Text**

```
PROMPT:
"Write a 100-word explanation of 'How Generative AI Works'
suitable for a beginner audience. Avoid technical jargon."

OUTPUT: Initial draft text
USAGE: Starting point; heavily revised for accuracy
```

---

### Phase 2: Image Generation (Using DALL-E 3)

**Step 4: Generate Concept Images**

```
PROMPTS (Example):
1. "Futuristic digital landscape with neural networks and
   glowing particles, modern tech aesthetic, dark background"
   → Use for: Hero image

2. "Abstract visualization of AI training on data,
   connections forming, illuminated patterns, 3D render"
   → Use for: Process diagram inspiration or section header

3. "Concept art: AI-generated digital art, blend of multiple
   styles, creative and unique, colorful"
   → Use for: Gallery examples

OUTPUT: 5-15 generated images
CURATION: Select 5-8 highest quality
EDITING: Crop, adjust colors, optimize for web

FILE FORMAT CONVERSION:
PNG/JPG (from DALL-E) → WEBP using:
- ImageMagick command line
- Photopea.com
- Online converter tools
- Python PIL library

TARGET SIZES AFTER EDITING:
- Hero: 1920×1080 (300KB WEBP)
- Gallery: 600×400 (120KB WEBP each)
```

---

### Phase 3: Voice Generation (Using ElevenLabs)

**Step 5: Convert Scripts to Voice**

```
SCRIPTS:
1. Video 1 Script: "How Generative AI Works" (~120 seconds)
2. Video 2 Script: "AI Tools in Action" (~90 seconds)

ELEVENLABS WORKFLOW:
1. Sign up / Log in to ElevenLabs
2. Create new project: "AI Website Project"
3. Input Script 1 (Video 1):
   - Text: Full narration script
   - Voice: Select "Professional" preset (clear, educational)
   - Language: English
   - Voice stability: High (for consistent quality)
   - Generate
   - Download MP3

4. Input Script 2 (Video 2):
   - Similar settings
   - Higher energy/enthusiasm for tool demo
   - Download MP3

5. Test in video editor (CapCut/Premiere)
   - Verify timing matches video scenes
   - Adjust if necessary

AUDIO OUTPUT OPTIONS:
- Use directly in video
- Enhance with Adobe Podcast (noise removal)
- Layer with background music
- Export as separate MP3 files
```

---

### Phase 4: Video Production (Manual + Assisted)

**Step 6: Script Writing & Organization**

```
Using ChatGPT for script outlines:

PROMPT 1:
"Write a 120-second video script explaining how Generative AI
works in simple terms. Include: training phase, pattern learning,
prompt input, generation process, refinement."

OUTPUT: Script with timing cues
USAGE: Base for final video production

REFINE: Hand-edit for accuracy, pacing, and clarity
```

**Step 7: Screen Recording & Editing (CapCut or Premiere Rush)**

```
TOOLS:
- CapCut (free, accessible, with AI features)
  - Auto-generation of captions
  - Built-in transitions
  - Music library access

- OR Adobe Premiere Rush
  - Professional interface
  - Auto-captions (Adobe Brain)
  - Effect suggestions

WORKFLOW:
1. Import video clips/screen recordings
2. Use AI auto-caption feature
3. Verify captions for accuracy
4. Add music from royalty-free library
5. Manual fine-tuning of pacing
6. Export as MP4 (1280×720, 3500 kbps)
```

---

## 3. AI Content Inventory

### What Is AI-Generated?

**Tier 1: Fully AI-Generated, Then Edited**

- ✓ Hero image
- ✓ 5-8 gallery/example images
- ✓ Narration in videos (ElevenLabs voice)
- ✓ Initial content outlines and brainstorms

**Tier 2: AI-Assisted, Heavily Modified**

- ✓ Content text: Initial drafts then 60-80% rewritten
- ✓ Scripts: AI-drafted, then carefully refined
- ✓ Video captions: Auto-generated then 100% verified

**Tier 3: AI-Supported Tools**

- ✓ Video editing effects (CapCut suggestions)
- ✓ Transition automation
- ✓ Color/sound balance suggestions

### What Is NOT AI-Generated?

**❌ Purely Manual/Original Work**

- All final educational content (hand-written)
- Design decisions and visual identity
- Section structure and information architecture
- Logo design concept
- Process diagrams (hand-designed)
- All code (HTML, CSS, JavaScript)
- Video editing decisions
- Captions verification and accuracy checks

---

## 4. Disclosure Strategy

### 4.1 Website-Level Disclosure

**Location:** Footer of website + Conclusion section

```html
<footer class="footer-disclosure">
  <h3>AI Content Disclosure</h3>
  <p>
    This website uses AI tools to enhance content creation. AI was used to
    generate selected images and voice narration. All AI-generated content has
    been manually reviewed, edited, and refined. Learn more in the
    <a href="#report">project report</a>.
  </p>
</footer>
```

**Alternative: Tooltip Labels**

```html
<div class="gallery-image">
  <img src="gallery-ai-01.webp" alt="AI-generated abstract visualization" />
  <span class="ai-label" title="Generated with DALL-E, edited for web">
    AI-Generated
  </span>
</div>
```

---

### 4.2 Report-Level Disclosure

**Report Section: "AI Tools and Content Generation"** (1-1.5 pages)

```markdown
## AI Tools and Content Generation

### Overview

This project intentionally used AI tools to enhance content
production speed and demonstrate AI capabilities in action,
consistent with the project requirements.

### AI Tools Used

#### 1. ChatGPT (OpenAI) - Text Content

**Purpose:** Content ideation and initial draft writing
**Usage:**

- Ideated section outlines and key points
- Drafted explanatory paragraphs (initial versions)
- Brainstormed examples and use cases
  **Percentage of Final Content:** ~30-40% AI-assisted initially,
  then 60-80% rewritten manually for accuracy and academic tone

**Disclosure:** All text content was reviewed, fact-checked,
and significantly rewritten to ensure accuracy and appropriate
academic voice.

#### 2. DALL-E 3 (OpenAI) - Image Generation

**Purpose:** Generate visual examples and demo content
**Usage:**

- Generated hero/background images
- Created 8 gallery images showcasing AI capabilities
- Produced concept illustrations for application cards
  **Total Generated:** 12-15 AI images
  **Processing:** All generated images were cropped, color-adjusted,
  and optimized for web in Photoshop/Photopea
  **Final Use:** 8 images in gallery section; 1-2 in hero/sections

**Disclosure:** All gallery images labeled "AI-generated, edited
for web" to clearly indicate their origin.

#### 3. ElevenLabs - AI Voice Narration

**Purpose:** Generate professional voiceovers for videos
**Usage:**

- Created narration for "How Generative AI Works" video (120 seconds)
- Created narration for "AI Tools in Action" demo video (90 seconds)
- Generated voice samples for audio section examples
  **Voice Quality:** Professional tone, clear pronunciation
  **Processing:** Integrated into videos; no separate voice tracks needed

**Disclosure:** Videos indicated that narration was AI-generated
using ElevenLabs text-to-speech technology.

#### 4. CapCut - AI-Assisted Video Editing

**Purpose:** Support video production workflow
**Usage:**

- Auto-caption generation (then manually verified)
- Transition suggestions
- Color correction assistance
- Music selection recommendations
  **Manual Component:** All editing decisions, pacing, and final
  composition were manually controlled

**Disclosure:** Videos created with manual editing; automatic
features were suggestions only.

### Content Categories and AI Usage Breakdown

| Content Type     | AI-Generated?   | % AI   | Final/Manual | Status     |
| ---------------- | --------------- | ------ | ------------ | ---------- |
| Explanatory Text | Partial (draft) | 30-40% | Rewritten    | ✓ Verified |
| Image Gallery    | Yes             | 100%   | Edited       | ✓ Verified |
| Narration Audio  | Yes             | 100%   | Integrated   | ✓ Verified |
| Video Editing    | Assisted        | 20-30% | Manual       | ✓ Verified |
| Logo/Branding    | No              | 0%     | Manual       | ✓ Original |
| Process Diagrams | No              | 0%     | Manual       | ✓ Original |
| HTML/CSS/JS Code | No              | 0%     | Manual       | ✓ Original |

### Quality Assurance and Verification

All AI-generated content underwent the following verification:

1. ✓ Accuracy check against sources
2. ✓ Relevance to educational goal
3. ✓ Quality assessment (images, audio)
4. ✓ Integration testing in website
5. ✓ Legal/copyright verification

### Ethical Consideration

The project demonstrates that AI tools can enhance and
accelerate content production while maintaining human
oversight, quality control, and critical thinking—exactly
the balanced approach recommended for professional AI use.
```

---

## 5. Prompt Documentation

Keep a record of all important prompts used for future reference and transparency:

### ChatGPT Prompts Used

```
PROMPT 1: Content Outline
"Create a brief educational outline for a website section
explaining Generative AI to beginners..."
[Full prompt recorded]
OUTPUT SUMMARY: 8-section structure with key points

PROMPT 2: Content Draft
"Write a 100-word explanation of 'How Generative AI Works'
suitable for a beginner audience..."
[Full prompt recorded]
OUTPUT SUMMARY: Initial explanatory paragraph

PROMPT 3: Script Writing
"Write a 120-second video script explaining how Generative AI
works in simple terms..."
[Full prompt recorded]
OUTPUT SUMMARY: Video narration script with timing cues
```

### DALL-E 3 Prompts Used

```
PROMPT 1: Hero Image
"Futuristic digital landscape with neural networks and glowing
particles, modern tech aesthetic, dark background, abstract
and visually striking, 3D render quality"
OUTPUT: 4 variations generated, 1 selected for gallery

PROMPT 2: Gallery Images (Multiple variations)
"Create a series of abstract AI visualization imagery featuring:
- Neural networks with glowing connections
- Data flowing as light patterns
- Abstract technology concepts
- Modern, professional, tech aesthetic"
OUTPUT: 8 images generated, 6 selected and edited for web
```

### ElevenLabs Settings Used

```
Voice Profile: EN-001 (Professional, Clear)
Language: English (US)
Voice Speed: 1.0 (Normal)
Voice Stability: 0.75 (High - for consistency)
Narration Type: Educational/Informative (appropriate tone)

Results:
- Video 1 narration: 120 seconds, 45 MB WAV → 2 MB MP3
- Video 2 narration: 90 seconds, 35 MB WAV → 1.5 MB MP3
```

---

## 6. Transparency Guidelines

### Do's ✓

- ✓ Clearly label AI-generated images in gallery
- ✓ Acknowledge AI voice in video descriptions
- ✓ Document which tools were used
- ✓ Note when AI output was edited/refined
- ✓ Explain why AI was chosen for each use case
- ✓ Maintain quality standards for all content
- ✓ Include detailed disclosure in final report
- ✓ Be honest about limitations and concerns

### Don'ts ❌

- ❌ Don't pretend AI-generated content is human-created
- ❌ Don't use AI for content where accuracy is critical (without verification)
- ❌ Don't hide the extent of AI usage
- ❌ Don't neglect to edit/verify AI outputs
- ❌ Don't use copyrighted material (images, audio)
- ❌ Don't overuse AI to the point of reducing original work
- ❌ Don't ignore ethical concerns or biases in AI outputs

---

## 7. Legal & Copyright Considerations

### Image Generation (DALL-E)

- **Ownership:** User owns rights to generated images
- **Commercial Use:** Allowed under OpenAI terms
- **Attribution:** Not required but good practice
- **Copyright Concerns:** Minimal (AI not copying existing work)

### Voice Generation (ElevenLabs)

- **Ownership:** User owns generated audio
- **Commercial Use:** Allowed under ElevenLabs terms
- **Attribution:** Not required but good practice

### Royalty-Free Music/Sounds

- **Sources:** Pixabay, YouTube Audio Library, Unsplash
- **License:** Must verify Creative Commons 0 or similar
- **Attribution:** Follow source requirements
- **Commercial Use:** Verify allowed for educational use

---

## 8. Benefits & Limitations Statement

### Benefits of Using AI in This Project

1. **Speed:** Significantly reduced production timeline
2. **Demonstration:** Showcases AI tools in action (educational value)
3. **Professional Quality:** AI generates high-quality starting points
4. **Accessibility:** Made video narration production feasible
5. **Variety:** Generated multiple options for selection
6. **Cost:** Reduced need for expensive tools/resources

### Limitations Acknowledged

1. **Accuracy Risk:** Initial AI text drafts required heavy editing
2. **Bias:** AI outputs may reflect biases in training data
3. **Originality:** Reduced original content percentage (mitigated by manual review)
4. **Control:** Human oversight essential for quality assurance
5. **Ethical Concerns:** AI labor, copyright, environmental impact

---

## 9. Final Verification Checklist

Before deploying website and submitting report:

### Content Verification

- [ ] All text content reviewed for accuracy
- [ ] All images labeled with AI source if applicable
- [ ] No copyright violations in images, audio, or code
- [ ] Captions 100% accurate
- [ ] Videos play correctly with captions

### Disclosure Completeness

- [ ] Website has AI content notice in footer
- [ ] Report includes detailed AI usage section
- [ ] All tools listed with specific use cases
- [ ] Prompts documented (if including in appendix)
- [ ] Transparency goals met

### Academic Integrity

- [ ] Original content significantly outweighs AI-assisted
- [ ] Manual editing significant (not just minor tweaks)
- [ ] AI usage disclosed clearly in report
- [ ] No misrepresentation of AI-generated content as human-created
- [ ] Project demonstrates understanding despite AI use

---

**Status:** AI Content Strategy planning complete - Ready for development milestones planning.
