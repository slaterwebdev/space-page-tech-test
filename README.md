### Adam Slater Tech Test
All tasks outlined in the brief have been successfully completed, with additional enhancements added to showcase visual and design capabilities.

While some components and functions have been extracted into their own files for clarity and scalability, I intentionally aimed for a balanced structure. The project is organized to be clean and maintainable without being overly fragmented, ensuring simplicity and ease of review. This approach provides a scalable foundation while keeping the overall structure straightforward and accessible relative to the project/task at hand.

If this was solely production then further abstraction of code in to their own respecitve files would have been implemented where possible. 

### Key Decisions

### Moving predefined pretend API data
I chose to move the pretend api data out of the `data()` area and in to `created()`, this was to better simulate how api data would be handled in the component whilst adhering to the rules of being allowed to move the provided data but not altering its structure.

#### Handling Data in `SpacePage` and not `MuseumHighlights` Using `formatHighlights mixin`
To make the MuseumHighlight component scalable and reusable, dynamic properties (specific to a page or partner) are handled through the extraProperties array. This ensures that new properties can be added without modifying the component, improving maintainability and flexibility, allowing the component and the formatting function to be used across all pages.

The formatHighlights mixin is placed in the parent component because in this approach formatting the data is the responsibility of each individual page. This ensures that the MuseumHighlight component remains lightweight and focused on rendering pre-formatted data rather than handling business logic. Keeping the formatting logic in the parent (shared across pages) aligns with SRP, where parents process data before passing it down to children as props.

Alternatively the formatting function could of been included as a mixin within the highlight component to make it a more complete unit that was self sufficient, but this approach aims to give the parent component stateful control, leaving the highlight component as context agnostic as possible.

#### Customizing Elements with Slots
The `badge` slot is used to allow each page to define its unique badge. This approach decouples page-specific logic from the `MuseumHighlight` component, making it more reusable while preserving the flexibility to customize and PRE-STYLE individual elements that can be passed down to the highlight component.

#### Start project
`npm install`
`npm run dev`