The contents of this directory is used to customize the output of Pandoc, the software used to produce DOCX exports of casebooks.


## Reference Document

`reference.docx` is a zip of the contents of the `reference_docx/` directory and is responsible for mapping our "[Custom Styles](https://pandoc.org/MANUAL.html#custom-styles)" by name to a set of styles and visual properties. To use a web-based analogy: `reference_docx/` is akin to `scss`; `reference.docx` is akin to the compiled css to be used for rendering; the "Custom Styles" are akin to HTML classes that can be used as selectors in the scss.

It was [originally generated by pandoc](https://pandoc.org/MANUAL.html#option--reference-doc), and then was altered to include H2O's style definitions.

To update the reference document, adjust the XML in `reference_docx/` as desired and then re-zip it:
```
$ cd services/pandoc/reference_docx/
$ zip -r ../reference.docx *
```

Recommended: verify `reference.docx` still opens in Word/LibreOffice.

Recommended: I've found it is generally easier to export a casebook and visually inspect it to test changes, rather than inspecting the appearance of `reference.docx` in Word/LibreOffice.


## Table of Contents

Pandoc includes the ability to automatically add a Table of Contents to a DOCX using Word's own Automatic Table of Contents feature, but at the time of writing, that feature is insufficient for our needs: it can only assemble a list of the Headings in the document and map those Headings to page numbers.

Instead, we inject a small amount of specialized HTML while preparing a casebook and run a [custom lua filter](https://pandoc.org/lua-filters.html), `table_of_contents.lua`, that finds that HTML and uses it to manually build the XML necessary both for our custom Table of Contents and for the bookmarks it points to.