### Adam Slater Tech Test
All tasks outlined in the brief have been successfully completed, with additional enhancements added to showcase visual and design capabilities.

While some components and functions have been extracted into their own files for clarity and scalability, I intentionally aimed for a balanced structure. The project is organized to be clean and maintainable without being overly fragmented, ensuring simplicity and ease of review. This approach provides a scalable foundation while keeping the overall structure straightforward and accessible.

If this was solely production then further abstraction of code in to their own files would have been implemented where possible. 

### Key Decisions

#### Handling Data in `SpacePage` and not `MuseumHighlights` Using `formatHighlights mixin`
To make the MuseumHighlight component scalable and reusable, dynamic properties (specific to a page or partner) are handled through the extraProperties array. This ensures that new properties can be added without modifying the component, improving maintainability and flexibility, allowing the component and the formatting function to be used across all pages.

The formatHighlights mixin is placed in the parent component because in this approach formatting the data is the responsibility of each individual page. This ensures that the MuseumHighlight component remains lightweight and focused on rendering pre-formatted data rather than handling business logic. Keeping the formatting logic in the parent (shared across pages) aligns with Vue's one-way data flow principle, where parents process data before passing it down to children as props.

This separation of concerns makes the MuseumHighlight component reusable across different pages while keeping the data preparation logic centralized in the parent and adhering to single responsibility best practises.

#### Customizing Elements with Slots
The `badge` slot is used to allow each page to define its unique badge. This approach decouples page-specific logic from the `MuseumHighlight` component, making it more reusable while preserving the flexibility to customize and PRE-STYLE individual elements.


#### Start project
`npm install`
`npm run dev`