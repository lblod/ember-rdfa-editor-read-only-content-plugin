import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class ApplicationController extends Controller {
  plugins = ['read-only-content'];

  @action
  rdfaEditorInit(controller) {
    const exampleDocument =
      '<div typeof="besluit:Besluit ext:BesluitKlassiekeStijl" resource="http://data.lblod.info/id/besluiten/bb7ca791-7952-44dc-b191-bc87ef55ae2c" property="prov:generated" data-editor-position-level="5" data-editor-rdfa-position-level="2"> <p>Openbare titel besluit:</p> <h5 datatype="xsd:string" property="eli:title" class="h4"><span class="mark-highlight-manual">Geef openbare titel besluit op</span></h5> <span typeof="skos:Concept" resource="http://publications.europa.eu/resource/authority/language/NLD" property="eli:language">&nbsp;</span> <br> <p>Korte openbare beschrijving:</p> <p datatype="xsd:string" property="eli:description"><span class="mark-highlight-manual">Geef korte beschrijving op</span></p> <br> <div property="besluit:motivering" data-editor-position-level="4" data-editor-rdfa-position-level="1"> <p> <span class="mark-highlight-manual">geef bestuursorgaan op</span>, </p> <br> <div> <ul class="bullet-list"><li>Gelet op <span class="mark-highlight-manual">Voeg juridische grond in</span>;</li></ul> </div> <br> <div data-editor-position-level="3"> <ul class="bullet-list" data-editor-position-level="2"><li data-editor-position-level="1">Overwegende dat <span class="mark-highlight-manual">Voeg motivering in</span>;</li></ul> </div> </div> <br> <br> <p class="u-spacer--small">Beslist,</p> <div datatype="xsd:string" property="prov:value"> <div typeof="besluit:Artikel" resource="http://data.lblod.info/artikels/db5db545-0ba9-450e-9031-fc58204740be" property="eli:has_part"> <div datatype="xsd:string" property="eli:number">Artikel 1</div> <span typeof="skos:Concept" resource="http://publications.europa.eu/resource/authority/language/NLD" property="eli:language">&nbsp;</span> <div datatype="xsd:string" property="prov:value"><span class="mark-highlight-manual">Voer inhoud in</span></div> </div> <br> <div class="mark-highlight-manual" data-editor-highlight="true">Voeg nieuw artikel in</div>  <br> </div> </div>';
    controller.perform((tr) => {
      tr.commands.insertComponent({
        componentName: 'inline-components/read-only-content-section',
        props: {
          title: 'Reglement',
          content: exampleDocument,
          link: 'https://redpencil.io/',
        },
        range: tr.rangeFactory.fromInElement(tr.currentDocument, 0, 0),
      });
    });
  }
}
