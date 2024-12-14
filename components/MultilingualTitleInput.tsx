/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Box, Stack, Text, TextInput } from '@sanity/ui';
import { useClient } from 'sanity';
import { set } from 'sanity';

interface Language {
  _id: string;
  id: string;
  title: string;
}


const MultilingualTitleInput: React.FC<any> = ({ value = { translations: [] }, onChange }) => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const client = useClient();

  useEffect(() => {
    const fetchLanguages = async () => {
      const result = await client.fetch('*[_type == "language"]');
      setLanguages(result);
    };

    fetchLanguages();
  }, []);

  const handleInputChange = (langId: string, newValue: string) => {
    const existingTranslation = value.translations.find((t: any) => t.language._ref === langId);
    if (existingTranslation) {
      onChange(
        set(
          value.translations.map((t: any) =>
            t.language._ref === langId ? { ...t, text: newValue } : t
          ),
          ['translations']
        )
      );
    } else {
      onChange(
        set(
          [...value.translations, { 
            _key: langId, 
            language: { _ref: langId }, 
            text: newValue }],
          ['translations']
        )
      );
    }
  };

  return (
    <Stack space={3}>
      {languages.map((lang) => {
        const translation = value.translations.find((t: any) => t.language._ref === lang._id);
        return (
          <Box key={lang._id} style={{ marginTop: 20 }}>
            <Text size={1} weight="semibold" style={{ marginBottom: 10 }}
            >
              {lang.title}
            </Text>
            <TextInput
              value={translation?.text || ''}
              onChange={(event) => handleInputChange(lang._id, event.currentTarget.value)}
              placeholder={`Enter title in ${lang.title}`}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default MultilingualTitleInput;

