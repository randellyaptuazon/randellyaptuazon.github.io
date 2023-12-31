import { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  useEffect(() => {
    tinymce.init({
      selector: 'textarea[data-plugin="tinymce"]',
      menubar: false,
      width: '100%',
      height: 300,
    });

    return () => {
      // Do proper cleanup on unmount
      tinymce.remove('textarea[data-plugin="tinymce"]');
    };
  }, []);

  const editorContent = `
    <p style="text-align: center;">
      <img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" />
    </p>
    <h1 style="text-align: center;">Welcome to the TinyMCE editor demo!</h1>
    <p>
      Please try out the features provided in this basic example.<br>
      Note that any <strong>MoxieManager</strong> file and image management functionality in this example is part of our commercial offering – the demo is to show the integration.
    </p>
    <h2>Got questions or need help?</h2>
    <ul>
      <li>Our <a href="https://www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/" target="_blank">Community Forum</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="www.tinymce.com/pricing">TinyMCE Enterprise</a>.</li>
    </ul>
    <h2>A simple table to play with</h2>
    <table style="text-align: center;">
      <thead>
        <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
        </tr>
        <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
        </tr>
      </tbody>
    </table>
    <h2>Found a bug?</h2>
    <p>
      If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
    </p>
    <h2>Finally ...</h2>
    <p>
      Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
    </p>
    <p>
      Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
    </p>
  `

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <textarea
          className="form-control"
          data-plugin="tinymce"
          value={editorContent}
        ></textarea>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
